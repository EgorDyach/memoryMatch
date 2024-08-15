import Button from "@components/button/Button";
import IconButton from "@components/button/IconButton";
import Flex from "@components/Flex";
import Image from "@components/Image";
import { SubHeader } from "@components/Typography";
import { shadows } from "@lib/theme/colors";
import styled from "styled-components";
import { shadow, textShadow } from "@lib/theme/shadow";

export const HealthWrapper = styled(Flex)`
  margin-top: 18px;
  padding: 4px 10px 5px 51px;
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
  top: -2px;
  padding: 7px 6px 5px;
`;
export const ButtonPass = styled(Button)`
  ${textShadow(shadows.yellow)}
  ${shadow("full")}
  font-size: 20px;
  padding: 2px 42px 0;
`;

export const StyledIconButton = styled(IconButton)`
  border-radius: 10px;
  padding: 10px;
`;

export const PlanetImage = styled(Image)`
  position: absolute;
  z-index: -1;
  top: -52%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const RootControls = styled(Flex)`
  flex-direction: column;
  padding: 0 24px;
`;

export const PlanetClick = styled(Flex)`
  width: 100%;
  position: relative;
  aspect-ratio: 1/1;
`;

export const Content = styled(Flex)`
  flex-direction: column;
  z-index: 1;
`;

export const StyledSubHeader = styled(SubHeader)`
  color: #fff;
  -webkit-text-stroke: 0.81px #623378;
  text-shadow: 0px 1.62px #623378;
  margin: 10px auto 0px;
`;

export const StyledButton = styled(Button)`
  font-size: 29.13px;
  line-height: 36.5px;
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
  margin: 4px auto 0;
  padding: 4px;
  box-shadow: 0px 1.62px 0px 0px #00000040 inset,
    0px -0.81px 0px 0px #ffffff40 inset;
`;
