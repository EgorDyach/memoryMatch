import Flex from "@components/Flex";
import { gradients } from "@lib/theme/colors";
import styled from "styled-components";
import bg from "@assets/bg.svg";
import { IndicatorItem } from "@components/IndicatorItem";
import DiamondIcon from "@components/icons/DiamondIcon";
import CoinIcon from "@components/icons/CoinIcon";
import IconButton from "@components/button/IconButton";
import PlusIcon from "@components/icons/PlusIcon";
import { SubHeader, Text } from "@components/Typography";
import ActiveHeartIcon from "@components/icons/ActiveHeartIcon";
import NotActiveHeartIcon from "@components/icons/NotActiveHeartIcon";
import Button from "@components/button/Button";
import SettingsIcon from "@components/icons/SettingsIcon";
import AdIcon from "@components/icons/AdIcon";
import NewsIcon from "@components/icons/NewsIcon";
import aztec from "/img/planets/aztec.png";
import Image from "@components/Image";
const Wrapper = styled(Flex)`
  background: url(${bg}), ${gradients.mainBg};
  height: 100%;
  position: relative;
  padding: 60px 19px 100px;
`;

const TopBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 57px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 86.85%);
`;

const HealthWrapper = styled(Flex)`
  margin-top: 18px;
  padding: 7px 10px 7px 50px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: min-content;
  border-radius: 5px;
`;

const ActionButton = styled(IconButton)`
  position: absolute;
  left: 0;
`;

const ButtonPass = styled(Button)`
  -webkit-text-stroke: 0.81px #e0622c;
  text-shadow: 0px 2px #e0622c;
  font-size: 20px;
  box-shadow: 0px 2px 0px 0px #0000001a, 0px 0.81px 2.85px 0px #00000040,
    0px 1.95px 0px 0px #0000001a, 0px 1.63px 0px 0px #ffffff40 inset,
    0px -1.63px 0px 0px #00000040 inset;
  padding: 6px 40px;
`;

const StyledIconButton = styled(IconButton)`
  border-radius: 10px;
  padding: 10px;
`;

const PlanetImage = styled(Image)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`;

const PlanetClick = styled.div`
  width: 100%;
  aspect-ratio: 1/1.1;
`;

const Content = styled(Flex)`
  flex-direction: column;
  z-index: 1;
`;

const StyledSubHeader = styled(SubHeader)`
  color: #fff;
  -webkit-text-stroke: 0.81px #623378;
  text-shadow: 0px 1.62px #623378;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  font-size: 29.13px;
  -webkit-text-stroke: 0.81px #623378;
  text-shadow: 0px 1.62px #623378;
  border: 0.81px solid #623378;
  margin: 0 auto;
  box-shadow: 0px 3.24px 0px 0px #623378, 0px 1.62px 0px 0px #ffffff40 inset;
  background-color: #cd3de3;
  padding: 3.24px;
  & > div {
    width: 100%;
    padding: 24px 100px;
    background-color: #e360ea;
    box-shadow: 0px 1.62px 0px 0px #ffffff40 inset,
      0px -1.62px 0px 0px #00000040 inset, 0px 0.81px 2.83px 0px #00000040;
    border-radius: 10px;
  }
`;

const StyledButtonShadow = styled.div`
  background: #0000004d;
  border-radius: 10px;
  margin: 0 auto;
  padding: 4px;
  box-shadow: 0px 1.62px 0px 0px #00000040 inset,
    0px -0.81px 0px 0px #ffffff40 inset;
`;

export const RootPage = () => {
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
          <StyledIconButton type="blue" icon={<SettingsIcon size={33} />} />
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
