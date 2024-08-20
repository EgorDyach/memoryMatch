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
import aztec from "/img/planets/aztec.webp";
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
} from "./rootStyles";
import { useModal } from "@hooks/useModal";
import { showBattlePass, showNews, showSettings } from "./constants";
import { formatNumber } from "@lib/utils/formatNumber";
import { showModal } from "@lib/utils/modal";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";

export const RootPage = () => {
  const [openModal] = useModal();
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const user = useSelector(uiSelectors.getUser);
  return (
    <>
      <Content>
        <RootControls>
          {user && (
            <Flex basis="50%" gap="12px" wrap="wrap">
              <IndicatorItem
                action={() => console.log("click")}
                value={formatNumber(11111111)}
                icon={<CoinIcon size={43} />}
              />
              <IndicatorItem
                action={() => console.log("click")}
                value={formatNumber(11111111)}
                icon={<DiamondIcon size={43} />}
              />
            </Flex>
          )}
          <HealthWrapper>
            <ActionButton
              icon={<PlusIcon size={20} color="#fff" />}
              onClick={() => console.log(123)}
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
            <ButtonPass onClick={() => showModal(showBattlePass)} type="yellow">
              Battle pass
            </ButtonPass>
            <StyledIconButton type="blue" icon={<AdIcon size={33} />} />
            <StyledIconButton
              onClick={() => showModal(showNews)}
              type="blue"
              icon={<NewsIcon size={33} />}
            />
            <StyledIconButton
              onClick={() => openModal(showSettings)}
              type="blue"
              icon={<SettingsIcon size={33} />}
            />
          </Flex>
        </RootControls>
        <PlanetClick onClick={() => console.log("clicked on planet")}>
          <PlanetImage src={aztec} />
        </PlanetClick>
        <StyledSubHeader>1 Season • 1 Level</StyledSubHeader>
        <StyledButtonShadow>
          <StyledButton padding="24px 100px" type="pink">
            <div>
              <div>PLAY</div>
            </div>
          </StyledButton>
        </StyledButtonShadow>
      </Content>
    </>
  );
};
