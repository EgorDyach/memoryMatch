import { usePathParam } from "@hooks/usePathParam";
import { useShuffle } from "@hooks/useShuffle";
import { localGameActions, localGameSelectors } from "@store/localGame";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import ActiveHeartIcon from "@components/icons/ActiveHeartIcon";
import NotActiveHeartIcon from "@components/icons/NotActiveHeartIcon";
import { HealthWrapper } from "@modules/rootPage/rootStyles";
import { Text } from "@components/Typography";
import { Title } from "@components/Title";
import { useSelector } from "react-redux";
import { formatTime } from "@lib/utils/formatTime";
import InfiniteIcon from "@components/icons/InfiniteIcon";
import { useModal } from "@hooks/useModal";
import { FailedModal } from "@modules/gamePage/failModal/constants";
import { pauseModal } from "@modules/gamePage/pauseModal/constants";
import { Card, CardsField } from "./CardsField";
import { items, pauseButtonBgColor, pauseButtonShadowColor } from "./constants";
import { WinModal } from "./winModal/constants";
import { uiActions, uiSelectors } from "@store/ui";
import { isKeyOfObject } from "@lib/utils/isKeyInObj";

const FlexFullWidth = styled(Flex)`
  width: 100%;
`;

const StyledButton = styled(IconButton)<{
  $activeGameType: keyof typeof pauseButtonShadowColor;
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
  $activeGameType: keyof typeof pauseButtonShadowColor;
}>`
  position: relative;
  background-color: ${(props) => pauseButtonBgColor[props.$activeGameType]};
`;

export const GamePage = () => {
  const [openModal, closeModal] = useModal();
  const getPath = usePathParam();
  const navigate = useNavigate();
  const getSize = usePathParam();
  const shuffle = useShuffle();
  const dispatch = useDispatch();
  const moves = useSelector(localGameSelectors.getMoves);
  const pairs = useSelector(localGameSelectors.getPairs);
  const initialTime = useSelector(localGameSelectors.getTime);
  const [time, setTime] = useState(initialTime);
  const [isPause, setIsPause] = useState<boolean>(false);

  const size = Number(getSize("size")) || 4;
  const [fields, setFields] = useState<Card[]>(
    shuffle<{ img: string; content: string }>([
      ...items.slice(0, size ** 2 / 2),
      ...items.slice(0, size ** 2 / 2),
    ]).map((item, index) => ({
      id: index,
      random: Math.random() * 100,
      img: item.img,
      content: item.content,
      isOpen: false,
    }))
  );
  const [active1, setActive1] = useState<Card | null>(null);
  const [active2, setActive2] = useState<Card | null>(null);
  const theme = useSelector(uiSelectors.getTheme);

  useEffect(() => {
    setFields(
      shuffle([
        ...items.slice(0, size ** 2 / 2),
        ...items.slice(0, size ** 2 / 2),
      ]).map((item, index) => ({
        id: index,
        random: Math.random() * 100,
        img: item.img,
        content: item.content,
        isOpen: false,
      }))
    );
  }, [shuffle, size]);

  useEffect(() => {
    dispatch(localGameActions.setPairs(fields.length / 2));
  }, [dispatch, fields.length]);

  useEffect(() => {
    const theme = getPath("theme") || "default";
    dispatch(
      uiActions.setTheme(
        isKeyOfObject(theme, pauseButtonBgColor) ? theme : "default"
      )
    );
  }, [dispatch, getPath]);

  useEffect(() => {
    if (active1 && active2 && active1.content === active2.content) {
      setFields(
        [
          ...fields.filter(
            (item) => item.id !== active1.id && item.id !== active2.id
          ),
          { ...active1, isOpen: true },
          { ...active2, isOpen: true },
        ].sort((a, b) => a.id - b.id)
      );
      setActive1(null);
      setActive2(null);
      dispatch(localGameActions.setPairsMinusOne());
      dispatch(localGameActions.setMovesMinusOne());
    } else if (active1 && active2) {
      setTimeout(() => {
        setActive1(null);
        setActive2(null);
      }, 750);
      dispatch(localGameActions.setMovesMinusOne());
    }
  }, [active1, active2, dispatch, fields]);

  const onRestart = useCallback(() => {
    closeModal();
    dispatch(localGameActions.setMoves(Number(getPath("moves") || 99)));
    dispatch(localGameActions.setPairs(fields.length / 2));
    dispatch(localGameActions.setSize(Number(getPath("size") || 4)));
    dispatch(
      localGameActions.setTimer(
        isNaN(Number(getPath("timer") || null))
          ? null
          : Number(getPath("timer") || null)
      )
    );
    setTime(
      isNaN(Number(getPath("timer") || null))
        ? null
        : Number(getPath("timer") || null)
    );
    setFields(
      shuffle([
        ...items.slice(0, size ** 2 / 2),
        ...items.slice(0, size ** 2 / 2),
      ]).map((item, index) => ({
        id: index,
        random: Math.random() * 100,
        img: item.img,
        content: item.content,
        isOpen: false,
      }))
    );
  }, [closeModal, dispatch, fields.length, getPath, shuffle, size]);

  const onExit = useCallback(() => {
    dispatch(localGameActions.setMoves(Number(getPath("moves") || 99)));
    dispatch(localGameActions.setPairs(fields.length / 2));
    navigate(getPath("backpath") || "/");
  }, [dispatch, fields.length, getPath, navigate]);

  const onCancel = useCallback(() => {
    setIsPause(false);
    closeModal(pauseModal(onExit, onCancel, onRestart));
  }, [closeModal, onExit, onRestart]);

  const handlePause = useCallback(() => {
    setIsPause(true);
    openModal(pauseModal(onExit, onCancel, onRestart));
  }, [onCancel, onExit, openModal, onRestart]);

  useEffect(() => {
    dispatch(localGameActions.setMoves(Number(getPath("moves") || 99)));
    dispatch(localGameActions.setSize(Number(getPath("size") || 4)));
    dispatch(
      localGameActions.setTimer(
        isNaN(Number(getPath("timer") || null))
          ? null
          : Number(getPath("timer") || null)
      )
    );
  }, [dispatch, getPath]);

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

  useEffect(() => {
    if (moves === 0 || time === 0) {
      setActive1(null);
      setActive2(null);
      openModal(FailedModal(onExit, onRestart));
    }
  }, [moves, onExit, openModal, time, onRestart]);

  useEffect(() => {
    if (pairs === 0) {
      setIsPause(true);
      openModal(WinModal(onExit, onRestart));
    }
  }, [onExit, onRestart, openModal, pairs]);

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
            $activeGameType={theme}
            icon={<PauseIcon color={pauseButtonShadowColor[theme]} size={21} />}
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
      <StyledTitle $activeGameType={theme} $top="medium" type="default">
        <FlexFullWidth justify="space-between">
          <Flex gap="11px" align="end">
            <Text
              $shadow={{ color: pauseButtonShadowColor[theme] }}
              $size="subtitle"
            >
              Moves
            </Text>
            <Text
              $shadow={{ color: pauseButtonShadowColor[theme] }}
              $size="title"
            >
              {moves}
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
              $shadow={{ color: pauseButtonShadowColor[theme] }}
              $size="subtitle"
            >
              Pairs
            </Text>
            <Text
              $shadow={{ color: pauseButtonShadowColor[theme] }}
              $size="title"
            >
              {pairs}
            </Text>
          </Flex>
        </FlexFullWidth>
      </StyledTitle>
      <CardsField
        fields={fields}
        size={size}
        active1={active1}
        active2={active2}
        onClick={(item: Card) => {
          if ((active1 && active2) || item.isOpen) return;
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
