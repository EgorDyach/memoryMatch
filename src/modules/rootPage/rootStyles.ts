import Button from "@components/button/Button";
import IconButton from "@components/button/IconButton";
import Flex from "@components/Flex";
import Image from "@components/Image";
import { SubHeader } from "@components/Typography";
import { gradients, shadows } from "@lib/theme/colors";
import styled from "styled-components";
import bg from "@assets/bg.svg";
import { shadow, textShadow } from "@lib/theme/shadow";

export const Wrapper = styled(Flex)`
  background: url(${bg}), ${gradients.mainBg};
  height: 100%;
  position: relative;
  min-height: 100vh;
  padding: 60px 19px 100px;
`;

export const TopBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 57px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 86.85%);
`;

export const HealthWrapper = styled(Flex)`
  margin-top: 18px;
  padding: 7px 10px 7px 50px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: min-content;
  border-radius: 5px;
`;

export const ActionButton = styled(IconButton)`
  position: absolute;
  left: 0;
`;

export const ButtonPass = styled(Button)`
  ${textShadow(shadows.yellow)}
  font-size: 20px;
  ${shadow("full")}
  padding: 6px 40px;
`;

export const StyledIconButton = styled(IconButton)`
  border-radius: 10px;
  padding: 10px;
`;

export const PlanetImage = styled(Image)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  max-width: 450px;
  margin: 0 auto;
`;

export const PlanetClick = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1/1.1;
`;

export const Content = styled(Flex)`
  flex-direction: column;
  z-index: 1;
`;

export const StyledSubHeader = styled(SubHeader)`
  color: #fff;
  -webkit-text-stroke: 0.81px #623378;
  text-shadow: 0px 1.62px #623378;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
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
    ${shadow("full")}
    border-radius: 10px;
  }
`;

export const StyledButtonShadow = styled.div`
  background: #0000004d;
  border-radius: 10px;
  margin: 0 auto;
  padding: 4px;
  box-shadow: 0px 1.62px 0px 0px #00000040 inset,
    0px -0.81px 0px 0px #ffffff40 inset;
`;
