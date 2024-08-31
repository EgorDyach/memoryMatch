import { useShuffle } from "@hooks/useShuffle";
import { localGameActions, localGameSelectors } from "@store/localGame";
import { useCallback, useEffect, useMemo, useState } from "react";
import Flex from "@components/Flex";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { shadow, textShadow } from "@lib/theme/shadow";
import { IndicatorItem } from "@components/IndicatorItem";
import { formatNumber } from "@lib/utils/formatNumber";
import DiamondIcon from "@components/icons/DiamondIcon";
import CoinIcon from "@components/icons/CoinIcon";
import IconButton from "@components/button/IconButton";
import PauseIcon from "@components/icons/PauseIcon";
import { useSelector } from "react-redux";
import { useModal } from "@hooks/useModal";
import { pauseModal } from "@modules/pauseModal/constants";
import { CardsField } from "./CardsField";
import { pauseButtonBgColor, pauseButtonShadowColor } from "./constants";
import { WinModal } from "./winModal/constants";
import { uiSelectors } from "@store/ui";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { LocalGameCard } from "@store/localGame/types";
import { generateTwoRandomItems } from "./helpers";
import { Text } from "@components/Typography";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { language } from "@constants/language";

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

const StyledPlayer = styled(Flex)`
  ${shadow("full")};
  padding: 10px;
  transition: background-color 0.35s ease-in-out;
  border-radius: 10px;
`;

const Player1 = styled(StyledPlayer)<{ $isActive: boolean }>`
  background-color: ${(props) => (props.$isActive ? "#1B6DBA" : "#3D5266")};
  ${textShadow("#133F5C")}
`;

const Player2 = styled(StyledPlayer)<{ $isActive: boolean }>`
  background-color: ${(props) => (props.$isActive ? "#7B1919" : "#604646")};
  ${textShadow("#5C1313")}
`;

export const VersusGamePage = () => {
  const [openModal, closeModal] = useModal();
  const navigate = useNavigate();
  const shuffle = useShuffle();
  const dispatch = useAppDispatch();
  const soundSfx = usePlaySFx();
  const pairsP1 = useSelector(localGameSelectors.getPairsP1);
  const pairsP2 = useSelector(localGameSelectors.getPairsP2);
  const size = useSelector(localGameSelectors.getSize);
  const isSfxActive = useSelector(uiSelectors.getIsSfxActive);
  const lang = useSelector(uiSelectors.getLanguage);
  const user = useSelector(uiSelectors.getUser);
  const generateCards = useCallback(
    (
      items: {
        imgId: number;
        id: number;
        season: number;
      }[]
    ) =>
      shuffle<{ id: number; season: number; imgId: number }>(items).map(
        (item) => ({
          id: item.id,
          imgId: item.imgId,
          season: item.season,
          random: Math.random() * 100,
          isFlipped: false,
        })
      ),
    [shuffle]
  );

  const [items1, items2] = useMemo(() => generateTwoRandomItems(size), [size]);
  const [cardsP1, setCardsP1] = useState<LocalGameCard[]>([]);
  const [cardsP2, setCardsP2] = useState<LocalGameCard[]>([]);
  const [activePlayer, setActivePlayer] = useState<"P1" | "P2">(
    Math.random() < 0.5 ? "P1" : "P2"
  );
  const [activeP1Card1, setActiveP1Card1] = useState<LocalGameCard | null>(
    null
  );
  const [activeP1Card2, setActiveP1Card2] = useState<LocalGameCard | null>(
    null
  );
  const [activeP2Card1, setActiveP2Card1] = useState<LocalGameCard | null>(
    null
  );
  const [activeP2Card2, setActiveP2Card2] = useState<LocalGameCard | null>(
    null
  );

  const onRestart = useCallback(() => {
    closeModal();
    soundSfx();
    dispatch(localGameActions.setPairsP1(cardsP1.length / 2));
    dispatch(localGameActions.setPairsP2(cardsP2.length / 2));
    setCardsP1(generateCards(items1));
    setCardsP2(generateCards(items2));
    setActiveP1Card1(null);
    setActiveP1Card2(null);
    setActiveP2Card1(null);
    setActiveP2Card2(null);
  }, [
    cardsP1.length,
    cardsP2.length,
    closeModal,
    dispatch,
    generateCards,
    items1,
    items2,
    soundSfx,
  ]);

  const onExit = useCallback(() => {
    dispatch(localGameActions.setPairsP1(0));
    dispatch(localGameActions.setPairsP2(0));
    navigate("/versus");
    soundSfx();
  }, [dispatch, navigate, soundSfx]);

  const onCancel = useCallback(() => {
    soundSfx();
    closeModal(pauseModal(onExit, onCancel, onRestart, lang));
  }, [closeModal, lang, onExit, onRestart, soundSfx]);

  const handlePause = useCallback(() => {
    soundSfx();
    openModal(pauseModal(onExit, onCancel, onRestart, lang));
  }, [soundSfx, openModal, onExit, onCancel, onRestart, lang]);

  useEffect(() => {
    setCardsP1(generateCards(items1));
    setCardsP2(generateCards(items2));
    dispatch(localGameActions.setPairsP1(size ** 2 / 2));
    dispatch(localGameActions.setPairsP2(size ** 2 / 2));
  }, [dispatch, generateCards, items1, items2, size]);

  useEffect(() => {
    if (!pairsP1 || !pairsP2) return;
    if (activePlayer === "P1") {
      if (
        activeP1Card1 &&
        activeP1Card2 &&
        activeP1Card1.imgId === activeP1Card2.imgId &&
        activeP1Card1.season === activeP1Card2.season
      ) {
        const card1 = cardsP1.find((item) => item.id === activeP1Card1.id);
        if (card1) card1.isFlipped = true;
        const card2 = cardsP1.find((item) => item.id === activeP1Card2.id);
        if (card2) card2.isFlipped = true;
        setActiveP1Card1(null);
        setActiveP1Card2(null);
        if (isSfxActive) {
          const audio = new Audio();
          audio.src = "/correctCardSfx.mp3";
          audio.volume = 0.2;
          audio.play();
        }
        setTimeout(() => {
          dispatch(localGameActions.setPairsP1(pairsP1 - 1));
        }, 750);
      } else if (activeP1Card1 && activeP1Card2) {
        setTimeout(() => {
          setActiveP1Card1(null);
          setActiveP1Card2(null);
          setActivePlayer("P2");
        }, 750);
      }
    } else {
      if (
        activeP2Card1 &&
        activeP2Card2 &&
        activeP2Card1.imgId === activeP2Card2.imgId &&
        activeP2Card1.season === activeP2Card2.season
      ) {
        const card1 = cardsP2.find((item) => item.id === activeP2Card1.id);
        if (card1) card1.isFlipped = true;
        const card2 = cardsP2.find((item) => item.id === activeP2Card2.id);
        if (card2) card2.isFlipped = true;
        setActiveP2Card1(null);
        setActiveP2Card2(null);
        if (isSfxActive) {
          const audio = new Audio();
          audio.src = "/correctCardSfx.mp3";
          audio.volume = 0.2;
          audio.play();
        }
        setTimeout(() => {
          dispatch(localGameActions.setPairsP2(pairsP2 - 1));
        }, 750);
      } else if (activeP2Card1 && activeP2Card2) {
        setTimeout(() => {
          setActiveP2Card1(null);
          setActiveP2Card2(null);
          setActivePlayer("P1");
        }, 750);
      }
    }
  }, [
    activeP1Card1,
    activeP1Card2,
    activeP2Card1,
    activeP2Card2,
    activePlayer,
    cardsP1,
    cardsP2,
    dispatch,
    isSfxActive,
    pairsP1,
    pairsP2,
  ]);

  useEffect(() => {
    if (pairsP1 === 0 && cardsP1.length) {
      openModal(WinModal(onExit, onRestart, "P1"));
      if (isSfxActive) {
        const audio = new Audio();
        audio.src = "/cardWinSfx.mp3";
        audio.volume = 0.2;
        audio.play();
      }
    }
    if (pairsP2 === 0 && cardsP2.length) {
      openModal(WinModal(onExit, onRestart, "P2"));
      if (isSfxActive) {
        const audio = new Audio();
        audio.src = "/cardWinSfx.mp3";
        audio.volume = 0.2;
        audio.play();
      }
    }
  }, [
    activePlayer,
    cardsP1.length,
    cardsP2.length,
    isSfxActive,
    onExit,
    onRestart,
    openModal,
    pairsP1,
    pairsP2,
  ]);

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
                $activeGameType={0}
                icon={<PauseIcon color={pauseButtonShadowColor[0]} size={21} />}
              />
            </Flex>
          </FlexFullWidth>
        </>
      )}
      <Flex $top="10px" gap="10px" basis="50%">
        <Player1
          align="center"
          direction="column"
          $isActive={activePlayer === "P1"}
        >
          <Text $size="subtitle">
            {language[lang]["versusGame"]["p1Pairs"]}
          </Text>
          <Text $size="header">{pairsP1}</Text>
        </Player1>
        <Player2
          align="center"
          direction="column"
          $isActive={activePlayer === "P2"}
        >
          <Text $size="subtitle">
            {language[lang]["versusGame"]["p2Pairs"]}
          </Text>
          <Text $size="header">{pairsP2}</Text>
        </Player2>
      </Flex>
      <CardsField
        cardsP1={cardsP1}
        cardsP2={cardsP2}
        size={size}
        active1={activePlayer === "P1" ? activeP1Card1 : activeP2Card1}
        active2={activePlayer === "P1" ? activeP1Card2 : activeP2Card2}
        onClick={(item: LocalGameCard) => {
          if (activePlayer === "P1") {
            if ((activeP1Card1 && activeP1Card2) || item.isFlipped) return;
            if (isSfxActive) {
              const audio = new Audio();
              audio.src = "/cardSfx.mp3";
              audio.volume = 0.2;
              audio.play();
            }
            if (activeP1Card1 && activeP1Card1.id !== item.id) {
              setActiveP1Card2(item);
              return;
            }
            setActiveP1Card1(item);
            return;
          }
          if ((activeP2Card1 && activeP2Card2) || item.isFlipped) return;
          if (isSfxActive) {
            const audio = new Audio();
            audio.src = "/cardSfx.mp3";
            audio.volume = 0.2;
            audio.play();
          }
          if (activeP2Card1 && activeP2Card1.id !== item.id) {
            setActiveP2Card2(item);
            return;
          }
          setActiveP2Card1(item);
          return;
        }}
        activePlayer={activePlayer}
      />
    </>
  );
};
