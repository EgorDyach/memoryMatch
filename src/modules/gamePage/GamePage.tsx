import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import ActiveHeartIcon from "@components/icons/ActiveHeartIcon";
import NotActiveHeartIcon from "@components/icons/NotActiveHeartIcon";
import { HealthWrapper } from "@modules/rootPage/rootStyles";
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
import { levelGameActions, levelGameSelectors } from "@store/levelGame";
import { Loader } from "@layouts/loaderLayout/Loader";
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

const StyledHeart = styled(Flex)`
  position: absolute;
  left: 0;
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

export const GamePage = () => {
  const [openModal, closeModal] = useModal();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const isSfxActive = useSelector(uiSelectors.getIsSfxActive);
  const requests = useSelector(uiSelectors.getRequests);
  const [time, setTime] = useState(initialTime);
  const [isPause, setIsPause] = useState<boolean>(false);

  const isLoading = requests["startGame"] === "pending";
  const [fields, setFields] = useState<GameCard[][]>(
    cards.map((row) =>
      row.map((item) => ({ ...item, random: Math.random() * 100 }))
    )
  );
  const [active1, setActive1] = useState<GameCard | null>(null);
  const [active2, setActive2] = useState<GameCard | null>(null);

  const onRestart = useCallback(() => {
    closeModal();
    soundSfx();
    dispatch(levelGameActions.setPairs(fields.length / 2));
    setIsPause(false);
    setActive1(null);
    setActive2(null);
    setFields(
      cards.map((row) =>
        row.map((item) => ({ ...item, random: Math.random() * 100 }))
      )
    );
  }, [cards, closeModal, dispatch, fields.length, soundSfx]);

  const onExit = useCallback(() => {
    navigate(backpath || "/");
    soundSfx();
  }, [backpath, navigate, soundSfx]);

  const onCancel = useCallback(() => {
    setIsPause(false);
    soundSfx();
    closeModal(pauseModal(onExit, onCancel, onRestart));
  }, [closeModal, onExit, onRestart, soundSfx]);

  const handlePause = useCallback(() => {
    setIsPause(true);
    soundSfx();
    openModal(pauseModal(onExit, onCancel, onRestart));
  }, [soundSfx, openModal, onExit, onCancel, onRestart]);

  //
  useEffect(() => {
    if (active1 && active2 && (active1.isFlipped || active2.isFlipped)) return;
    if (
      active1 &&
      active2 &&
      !active1.isFlipped &&
      !active2.isFlipped &&
      active1.cardTypeId === active2.cardTypeId
    ) {
      console.log(
        fields.map((elem) => {
          return elem
            .map((item, i) => {
              if (item.id === active2.id) {
                elem.splice(i, 1, { ...active2, isFlipped: true });
              }
              if (item.id === active1.id) {
                elem.splice(i, 1, { ...active1, isFlipped: true });
              }
              return item;
            })
            .sort((a, b) => a.id - b.id);
        })
      );
      setFields(
        fields.map((elem) => {
          return elem
            .map((item, i) => {
              if (item.id === active2.id) {
                elem.splice(i, 1, { ...active2, isFlipped: true });
              }
              if (item.id === active1.id) {
                elem.splice(i, 1, { ...active1, isFlipped: true });
              }
              return item;
            })
            .sort((a, b) => a.id - b.id);
        })
      );
      // setTimeout(() => {
      setActive1(null);
      setActive2(null);
      // }, 750);
      if (isSfxActive) {
        const audio = new Audio();
        audio.src = "/correctCardSfx.mp3";
        audio.volume = 0.2;
        audio.play();
      }
      dispatch(levelGameActions.setPairsMinusOne());
      dispatch(levelGameActions.setMovesUsedPlusOne());
    } else if (active1 && active2) {
      setTimeout(() => {
        setActive1(null);
        setActive2(null);
      }, 750);
      dispatch(levelGameActions.setMovesUsedPlusOne());
    }
  }, [active1, active2, cards, dispatch, fields, isSfxActive]);

  useEffect(() => {
    setFields(
      cards.map((row) =>
        row.map((item) => ({ ...item, random: Math.random() * 100 }))
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

  // LOSE
  useEffect(() => {
    if (gameId && (maxMoves === movesUsed || time === 0)) {
      setActive1(null);
      setActive2(null);
      openModal(FailedModal(onExit, onRestart));
    }
  }, [onExit, openModal, time, onRestart, maxMoves, movesUsed, gameId]);

  // WIN
  useEffect(() => {
    if (pairs === 0) {
      setIsPause(true);
      if (isSfxActive) {
        const audio = new Audio();
        audio.src = "/cardWinSfx.mp3";
        audio.volume = 0.2;
        audio.play();
      }
      openModal(WinModal(onExit, onRestart));
    }
  }, [isSfxActive, onExit, onRestart, openModal, pairs]);

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
      <FlexFullWidth direction="column">
        <Flex align="center" gap="10px">
          <StyledIndicator
            justify="right !important"
            flex="1"
            value={formatNumber(11111111)}
            icon={<DiamondIcon size={43} />}
          />
          <StyledIndicator
            flex="1"
            justify="right !important"
            value={formatNumber(11111111)}
            icon={<CoinIcon size={43} />}
          />
          <StyledButton
            onClick={handlePause}
            $left="10px"
            padding="11px"
            $activeGameType={seasonId}
            icon={
              <PauseIcon color={pauseButtonShadowColor[seasonId]} size={21} />
            }
          />
        </Flex>
      </FlexFullWidth>
      <HealthWrapper>
        <StyledHeart>
          <ActiveHeartIcon size={35} />
        </StyledHeart>
        <Flex gap="5px">
          <ActiveHeartIcon size={21} />
          <ActiveHeartIcon size={21} />
          <ActiveHeartIcon size={21} />
          <ActiveHeartIcon size={21} />
          <ActiveHeartIcon size={21} />
          <NotActiveHeartIcon size={21} />
          <NotActiveHeartIcon size={21} />
        </Flex>
        <Text $size="subtitle">11:11</Text>
      </HealthWrapper>
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
              {pairs}
            </Text>
          </Flex>
        </FlexFullWidth>
      </StyledTitle>
      <CardsField
        fields={fields}
        active1={active1}
        active2={active2}
        onClick={(item: GameCard) => {
          if ((active1 && active2) || item.isFlipped) return;
          if (isSfxActive) {
            const audio = new Audio();
            audio.src = "/cardSfx.mp3";
            audio.volume = 0.2;
            audio.play();
          }
          if (active1 && active1.id !== item.id) {
            setActive2(item);
            return;
          }
          setActive1(item);
        }}
      />
    </>
  );
};
