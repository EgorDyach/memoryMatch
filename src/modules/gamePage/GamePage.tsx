import { useCallback, useEffect, useState } from "react";
import Flex from "@components/Flex";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { shadow, textShadow } from "@lib/theme/shadow";
import { IndicatorItem } from "@components/IndicatorItem";
import { formatNumber } from "@lib/utils/formatNumber";
import DiamondIcon from "@components/icons/DiamondIcon";
import CoinIcon from "@components/icons/CoinIcon";
import IconButton from "@components/button/IconButton";
import PauseIcon from "@components/icons/PauseIcon";
import { Text } from "@components/Typography";
import { Title } from "@components/Title";
import { useSelector } from "react-redux";
import { formatTime } from "@lib/utils/formatTime";
import InfiniteIcon from "@components/icons/InfiniteIcon";
import { useModal } from "@hooks/useModal";
import { FailedModal } from "@modules/failModal/constants";
import { pauseModal } from "@modules/pauseModal/constants";
import { CardsField, GameCard } from "./CardsField";
import { pauseButtonBgColor, pauseButtonShadowColor } from "./constants";
import { WinModal } from "../winModal/constants";
import { uiSelectors } from "@store/ui";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { levelGameSelectors } from "@store/levelGame";
import { Loader } from "@layouts/loaderLayout/Loader";
import {
  fetchAbortGame,
  fetchFlipCard,
  fetchPauseGame,
  fetchRestartGame,
  fetchStartNextLevel,
  fetchUnpauseGame,
  reRequestData,
} from "@store/levelGame/thunks";
import { useAppDispatch } from "@hooks/useAppDispatch";
import {
  fetchBoostExtraTime,
  fetchBoostOpenPair,
  fetchBoostViewCards,
} from "@store/levelGame/thunks";
import CardsIcon from "@components/icons/CardsIcon";
import LoopIcon from "@components/icons/LoopIcon";
import RocketIcon from "@components/icons/RocketIcon";
import { Hearts } from "@components/Hearts";
const FlexFullWidth = styled(Flex)`
  width: 100%;
`;

const StyledButton = styled(IconButton)<{
  $activeGameType: number;
}>`
  border-radius: 11px;
  background-color: ${(props) => pauseButtonBgColor[props.$activeGameType]};
  border: 2px solid ${(props) => pauseButtonShadowColor[props.$activeGameType]};
  ${shadow("full")};
`;

const StyledIndicator = styled(IndicatorItem)`
  padding: 7px 14px;
`;

const StyledTime = styled(Flex)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #febc01;
  box-shadow: 0px -2.11px 0px 0px #00000040 inset,
    0px 1.06px 3.7px 0px #00000040, 0px 2.53px 0px 0px #0000001a;
  padding: 4px 8%;
  border-radius: 10px;
  ${textShadow("#E0622C")}
`;

const StyledTitle = styled(Title)<{
  $activeGameType: number;
}>`
  position: relative;
  background-color: ${(props) => pauseButtonBgColor[props.$activeGameType]};
`;

const BoostsContainer = styled(Flex)`
  bottom: 0px;
  position: fixed;
  padding: 0px 11px 20px;
  left: 0;
  right: 0;
  z-index: 3;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 40%, transparent 100%);
`;
export const GamePage = () => {
  const [openModal, closeModal] = useModal();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const soundSfx = usePlaySFx();

  const maxMoves = useSelector(levelGameSelectors.getMaxMoves);
  const movesUsed = useSelector(levelGameSelectors.getMovesUsed);
  const pairs = useSelector(levelGameSelectors.getPairs);
  const initialTime = useSelector(levelGameSelectors.getInitialTimer);
  const gameId = useSelector(levelGameSelectors.getGameId);
  const gameLevelId = useSelector(levelGameSelectors.getGameLevelId);
  const seasonId = useSelector(levelGameSelectors.getSeasonId);
  const cards = useSelector(levelGameSelectors.getCards);
  const backpath = useSelector(levelGameSelectors.getBackpath);
  const status = useSelector(levelGameSelectors.getStatus);
  const isSfxActive = useSelector(uiSelectors.getIsSfxActive);
  const requests = useSelector(uiSelectors.getRequests);
  const user = useSelector(uiSelectors.getUser);
  const lang = useSelector(uiSelectors.getLanguage);
  const [time, setTime] = useState(initialTime);
  const [isPause, setIsPause] = useState<boolean>(false);

  const isLoading = requests["startGame"] === "pending";
  const [fields, setFields] = useState<GameCard[][]>(
    cards.map((row) => row.map((item) => ({ ...item, random: item.id % 100 })))
  );
  const onRestart = useCallback(() => {
    soundSfx();
    if (!gameId) return;
    dispatch(fetchRestartGame(gameId));
    closeModal();
    setIsPause(false);
  }, [closeModal, dispatch, gameId, soundSfx]);

  const onNext = useCallback(() => {
    soundSfx();
    if (!gameId) return;
    dispatch(fetchStartNextLevel());
    closeModal();
    setIsPause(false);
  }, [closeModal, dispatch, gameId, soundSfx]);

  const onExit = useCallback(() => {
    soundSfx();
    if (!gameId) return;
    dispatch(fetchAbortGame(gameId));
    navigate(backpath || "/");
  }, [backpath, dispatch, gameId, navigate, soundSfx]);

  const onWinExit = useCallback(async () => {
    soundSfx();
    if (!gameId) return;
    reRequestData(dispatch);
    navigate(backpath || "/");
  }, [backpath, dispatch, gameId, navigate, soundSfx]);

  const onCancel = useCallback(() => {
    soundSfx();
    if (!gameId) return;
    dispatch(fetchUnpauseGame(gameId));
    setIsPause(false);
    closeModal(pauseModal(onExit, onCancel, onRestart, lang));
  }, [closeModal, dispatch, gameId, lang, onExit, onRestart, soundSfx]);

  const handlePause = useCallback(async () => {
    soundSfx();
    if (!gameId) return;
    dispatch(fetchPauseGame(gameId));
    setIsPause(true);
    openModal(pauseModal(onExit, onCancel, onRestart, lang));
  }, [
    soundSfx,
    gameId,
    dispatch,
    openModal,
    onExit,
    onCancel,
    onRestart,
    lang,
  ]);

  useEffect(() => {
    setFields(
      cards.map((row) =>
        row.map((item) => ({ ...item, random: item.id % 100 }))
      )
    );
  }, [cards]);

  // TIME
  useEffect(() => {
    if (time && !isPause) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time, isPause]);

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  // STATUS
  useEffect(() => {
    if (!gameId || status === null) return;
    if (status === 3) {
      openModal(FailedModal(onExit, onRestart));
      return;
    }
    if (status === 2) {
      openModal(WinModal(onWinExit, onNext));
      if (isSfxActive) {
        const audio = new Audio();
        audio.src = "/cardWinSfx.mp3";
        audio.volume = 0.2;
        audio.play();
      }
      return;
    }
    if (status === 1) {
      setIsPause(true);
      openModal(pauseModal(onExit, onCancel, onRestart, lang));
      return;
    }
    if (status === 0) {
      setIsPause(false);
      closeModal();
      return;
    }
  }, [
    closeModal,
    gameId,
    isSfxActive,
    lang,
    onCancel,
    onExit,
    onNext,
    onRestart,
    onWinExit,
    openModal,
    pairs,
    status,
  ]);

  if (isLoading) return <Loader isOpen={true} />;

  if (!isLoading && !gameId) return <Navigate to={"/"} />;

  if (
    pairs === null ||
    maxMoves === null ||
    movesUsed === null ||
    gameLevelId === null ||
    gameId === null ||
    seasonId === null ||
    !cards.length
  )
    return "Не удалось запустить игру :(";

  return (
    <>
      {user && (
        <>
          <FlexFullWidth direction="column">
            <Flex align="center" gap="10px">
              <StyledIndicator
                justify="right !important"
                flex="1"
                value={formatNumber(user.gem)}
                icon={<DiamondIcon size={43} />}
              />
              <StyledIndicator
                flex="1"
                justify="right !important"
                value={formatNumber(user.gold)}
                icon={<CoinIcon size={43} />}
              />
              <StyledButton
                onClick={handlePause}
                $left="10px"
                padding="11px"
                $activeGameType={seasonId}
                icon={
                  <PauseIcon
                    color={pauseButtonShadowColor[seasonId]}
                    size={21}
                  />
                }
              />
            </Flex>
          </FlexFullWidth>
          <Hearts />
        </>
      )}
      <StyledTitle $activeGameType={seasonId} $top="medium" type="default">
        <FlexFullWidth justify="space-between">
          <Flex gap="11px" align="end">
            <Text
              $shadow={{ color: pauseButtonShadowColor[seasonId] }}
              $size="subtitle"
            >
              Moves
            </Text>
            <Text
              $shadow={{ color: pauseButtonShadowColor[seasonId] }}
              $size="title"
            >
              {maxMoves - movesUsed}
            </Text>
          </Flex>
          <StyledTime align="center" direction="column">
            <Text $size="subtitle">Time</Text>
            {time || time === 0 ? (
              <Text>{formatTime(time)}</Text>
            ) : (
              <Flex $top="3px">
                <InfiniteIcon width={"44px"} />
              </Flex>
            )}
          </StyledTime>
          <Flex gap="11px" align="end" direction="row-reverse">
            <Text
              $shadow={{ color: pauseButtonShadowColor[seasonId] }}
              $size="subtitle"
            >
              Pairs
            </Text>
            <Text
              $shadow={{ color: pauseButtonShadowColor[seasonId] }}
              $size="title"
            >
              {Math.ceil(cards.flat().filter((el) => !el.isFlipped).length / 2)}
            </Text>
          </Flex>
        </FlexFullWidth>
      </StyledTitle>
      <CardsField
        fields={fields}
        onClick={(item: GameCard) => {
          if (item.isFlipped) return;
          if (isSfxActive) {
            const audio = new Audio();
            audio.src = "/cardSfx.mp3";
            audio.volume = 0.2;
            audio.play();
          }
          dispatch(fetchFlipCard(gameId, item.id));
        }}
      />
      <BoostsContainer justify="space-between">
        <Flex align="center" gap="14px">
          <IconButton
            disabled={!user?.boosts[0]?.count}
            type="yellow"
            icon={<CardsIcon size={23} />}
            onClick={async () => {
              const boost = user?.boosts[0];
              if (!boost) return;
              if (boost.count) {
                dispatch(fetchBoostViewCards(gameId, cards));
              }
            }}
          />
          <Text $size="title">{user?.boosts[0]?.count || 0}</Text>
        </Flex>
        <Flex align="center" gap="14px">
          <IconButton
            disabled={!user?.boosts[1]?.count}
            type="yellow"
            icon={<LoopIcon size={23} />}
            onClick={async () => {
              const boost = user?.boosts[1];
              if (!boost) return;
              if (boost.count) {
                dispatch(fetchBoostOpenPair(gameId));
              }
            }}
          />
          <Text $size="title">{user?.boosts[1]?.count || 0}</Text>
        </Flex>
        <Flex align="center" gap="14px">
          <IconButton
            disabled={!user?.boosts[2]?.count}
            type="yellow"
            icon={<RocketIcon size={23} />}
            onClick={async () => {
              const boost = user?.boosts[2];
              if (!boost) return;
              if (boost.count) {
                dispatch(fetchBoostExtraTime(gameId));
              }
            }}
          />
          <Text $size="title">{user?.boosts[2]?.count || 0}</Text>
        </Flex>
      </BoostsContainer>
    </>
  );
};
