import Flex from "@components/Flex";
import { LanguageSwiper } from "@components/LanguageSwiper";
import { Toggle } from "@components/Toggle";
import { Text } from "@components/Typography";
import styled from "styled-components";
import { settingsLanguages, showPrivacy } from "./constants";
import Button from "@components/button/Button";
import { showModal } from "@lib/utils/modal";

const SettingsWrapper = styled(Flex)`
  width: 100%;
`;

const SettingsControls = styled(Flex)`
  background-color: #ddeaee;
  border-radius: 10px 10px 0 0;
`;

const Links = styled(Flex)`
  background-color: #ddeaee;
  border-radius: 0 0 10px 10px;
`;

const RowLine = styled(Flex)`
  position: absolute;
  width: 100%;
  top: 315px;
  left: 0;
  height: 5px;
  background-color: #64697b;
`;

const ButtonLink = styled(Button)`
  color: #ffffff;
  text-shadow: 0px 2.53px #092e46;
  font-size: 19px;
  padding: 16px 3px;
  -webkit-text-stroke: 1.02px #092e46;
  box-shadow: 0px 1.67px 0px 0px #ffffff40 inset,
    0px -1.67px 0px 0px #00000040 inset, 0px 0.84px 2.92px 0px #00000040,
    0px 2px 0px 0px #0000001a;
`;

export const Settings = () => {
  return (
    <SettingsWrapper $top="small" gap="5px" direction="column">
      <SettingsControls direction="column">
        <Flex align="center" justify="space-between">
          <Text $color="#092E46" $size="subtitle">
            Music
          </Text>
          <Toggle values={["On", "Off"]} onChange={(v) => console.log(v)} />
        </Flex>
        <Flex $top="medium" align="center" justify="space-between">
          <Text $color="#092E46" $size="subtitle">
            SFx
          </Text>
          <Toggle values={["On", "Off"]} onChange={(v) => console.log(v)} />
        </Flex>
        <LanguageSwiper languages={settingsLanguages} $top="large" />
      </SettingsControls>
      <RowLine />
      <Flex $top="53px"></Flex>
      <Links basis="50%" gap="6px" wrap="wrap">
        <ButtonLink type="blue">Support</ButtonLink>
        <ButtonLink onClick={() => showModal(showPrivacy)} type="blue">
          Privacy
        </ButtonLink>
        <ButtonLink type="blue">FAQ</ButtonLink>
        <ButtonLink type="blue">Terms of Service</ButtonLink>
      </Links>
    </SettingsWrapper>
  );
};
