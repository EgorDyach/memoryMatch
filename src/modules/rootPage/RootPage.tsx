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
import aztec from "/img/planets/aztec.png";
import {
  Wrapper,
  TopBlur,
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
} from "./rootStyles";
import { useModal } from "@hooks/useModal";
import { showSettings } from "./constants";

export const RootPage = () => {
  const [openModal] = useModal();
  return (
    <Wrapper direction="column">
      <TopBlur />
      <Content>
        <Flex basis="50%" gap="15px" wrap="wrap">
          <IndicatorItem
            action={() => console.log("click")}
            value={11111111}
            icon={<CoinIcon size={53} />}
          />
          <IndicatorItem
            action={() => console.log("click")}
            value={11111111}
            icon={<DiamondIcon size={43} />}
          />
        </Flex>
        <HealthWrapper>
          <ActionButton
            icon={<PlusIcon size={20} color="#fff" />}
            onClick={() => console.log(123)}
          />
          <Flex gap="8px">
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <NotActiveHeartIcon size={20} />
            <NotActiveHeartIcon size={20} />
          </Flex>
          <Text $size="subtitle">11:11</Text>
        </HealthWrapper>
        <Flex gap="12px" $top="medium" wrap="wrap" justify="space-between">
          <ButtonPass type="yellow">Battle pass</ButtonPass>
          <StyledIconButton type="blue" icon={<AdIcon size={33} />} />
          <StyledIconButton type="blue" icon={<NewsIcon size={33} />} />
          <StyledIconButton
            onClick={() => openModal(showSettings)}
            type="blue"
            icon={<SettingsIcon size={33} />}
          />
        </Flex>
        <PlanetClick onClick={() => console.log("clicked on planet")} />
        <StyledSubHeader>1 Season • 1 Level</StyledSubHeader>
        <StyledButtonShadow>
          <StyledButton type="pink">
            <div>
              <div>PLAY</div>
            </div>
          </StyledButton>
        </StyledButtonShadow>
      </Content>
      <PlanetImage src={aztec} width={"100%"} />
    </Wrapper>
  );
};
