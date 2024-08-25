import Flex from "@components/Flex";
import { IndicatorItem } from "@components/IndicatorItem";
import DiamondIcon from "@components/icons/DiamondIcon";
import CoinIcon from "@components/icons/CoinIcon";
import PlusIcon from "@components/icons/PlusIcon";
import { Text } from "@components/Typography";
import ActiveHeartIcon from "@components/icons/ActiveHeartIcon";
import NotActiveHeartIcon from "@components/icons/NotActiveHeartIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import AdIcon from "@components/icons/AdIcon";
import NewsIcon from "@components/icons/NewsIcon";
import {
  Content,
  HealthWrapper,
  ActionButton,
  ButtonPass,
  StyledIconButton,
  PlanetClick,
  StyledSubHeader,
  StyledButtonShadow,
  StyledButton,
  PlanetImage,
  RootControls,
  StyledFlex,
} from "./rootStyles";
import { useModal } from "@hooks/useModal";
import { planets, showBattlePass, showNews, showSettings } from "./constants";
import { formatNumber } from "@lib/utils/formatNumber";
import { showModal } from "@lib/utils/modal";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import { useUserLocation } from "@hooks/useUserLocation";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { useNavigate } from "react-router-dom";
import { fetchStartGame } from "@store/levelGame/thunks";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const RootPage = () => {
  const [openModal] = useModal();
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const user = useSelector(uiSelectors.getUser);
  const location = useUserLocation();
  const soundSfx = usePlaySFx();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handlePlay = () => {
    if (!location) return;
    navigate("/game");
    dispatch(fetchStartGame(location.number, location.id, `/`));
    soundSfx();
  };
  return (
    <>
      <Content>
        <RootControls>
          {user && (
            <Flex basis="50%" gap="6px" wrap="wrap">
              <IndicatorItem
                action={() => {
                  soundSfx();
                  navigate("/shop");
                }}
                value={formatNumber(user.gold)}
                icon={<CoinIcon size={43} />}
              />
              <IndicatorItem
                action={() => {
                  soundSfx();
                  navigate("/shop");
                }}
                value={formatNumber(user.gem)}
                icon={<DiamondIcon size={43} />}
              />
            </Flex>
          )}
          <HealthWrapper>
            <ActionButton
              icon={<PlusIcon size={20} color="#fff" />}
              onClick={() => {
                soundSfx();
                navigate("/shop");
              }}
            />
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
          <Flex gap="12px" $top="slarge" justify="space-between">
            <ButtonPass
              onClick={() => {
                soundSfx();
                showModal(showBattlePass);
              }}
              type="yellow"
            >
              Battle pass
            </ButtonPass>
            <StyledIconButton type="blue" icon={<AdIcon size={33} />} />
            <StyledIconButton
              onClick={() => {
                soundSfx();
                showModal(showNews);
              }}
              type="blue"
              icon={<NewsIcon size={33} />}
            />
            <StyledIconButton
              onClick={() => {
                soundSfx();
                openModal(showSettings);
              }}
              type="blue"
              icon={<SettingsIcon size={33} />}
            />
          </Flex>
        </RootControls>
        <PlanetClick onClick={() => console.log("clicked on planet")}>
          {location && <PlanetImage src={planets[location.id - 1]} />}
        </PlanetClick>
        <StyledFlex>
          {location && (
            <StyledSubHeader>
              {location.id} Season • {location.number} Level
            </StyledSubHeader>
          )}
          <StyledButtonShadow>
            <StyledButton onClick={handlePlay} padding="24px 100px" type="pink">
              <div>
                <div>PLAY</div>
              </div>
            </StyledButton>
          </StyledButtonShadow>
        </StyledFlex>
      </Content>
    </>
  );
};
