import Flex from "@components/Flex";
import { LanguageSwiper } from "@components/LanguageSwiper";
import { Toggle } from "@components/Toggle";
import { Text } from "@components/Typography";
import styled from "styled-components";
import { showPrivacy } from "./constants";
import Button from "@components/button/Button";
import { showModal } from "@lib/utils/modal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions, uiSelectors } from "@store/ui";
import { language } from "@constants/language";

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
  top: 290px;
  left: 0;
  height: 5px;
  background-color: #64697b;
`;

const ButtonLink = styled(Button)`
  color: #ffffff;
  text-shadow: 0px 2.53px #092e46;
  font-size: 16px;
  padding: 16px 3px;
  -webkit-text-stroke: 1.02px #092e46;
  box-shadow: 0px 1.67px 0px 0px #ffffff40 inset,
    0px -1.67px 0px 0px #00000040 inset, 0px 0.84px 2.92px 0px #00000040,
    0px 2px 0px 0px #0000001a;
`;

export const Settings = () => {
  const isAudioPlaying = useSelector(uiSelectors.getIsAudioPlaying);
  const isSfxActive = useSelector(uiSelectors.getIsSfxActive);
  const dispatch = useDispatch();
  const lang = useSelector(uiSelectors.getLanguage);
  return (
    <SettingsWrapper $top="small" gap="5px" direction="column">
      <SettingsControls direction="column">
        <Flex align="center" justify="space-between">
          <Text $color="#092E46" $size="default">
            {language[lang]["modals"]["music"]}
          </Text>
          <Toggle
            values={[
              language[lang]["modals"]["on"],
              language[lang]["modals"]["off"],
            ]}
            activeValue={
              isAudioPlaying
                ? language[lang]["modals"]["on"]
                : language[lang]["modals"]["off"]
            }
            onChange={(v) => {
              if (v === language[lang]["modals"]["on"])
                dispatch(uiActions.setIsAudioPlaying(true));
              if (v === "Offlanguage[lang]['modals']['off']")
                dispatch(uiActions.setIsAudioPlaying(false));
            }}
          />
        </Flex>
        <Flex $top="medium" align="center" justify="space-between">
          <Text $color="#092E46" $size="default">
            {language[lang]["modals"]["sfx"]}
          </Text>
          <Toggle
            values={[
              language[lang]["modals"]["on"],
              language[lang]["modals"]["off"],
            ]}
            activeValue={
              isSfxActive
                ? language[lang]["modals"]["on"]
                : language[lang]["modals"]["off"]
            }
            onChange={(v) => {
              if (v === language[lang]["modals"]["on"])
                dispatch(uiActions.setIsSfxActive(true));
              if (v === language[lang]["modals"]["off"])
                dispatch(uiActions.setIsSfxActive(false));
            }}
          />
        </Flex>
        <LanguageSwiper
          active={language[lang].name}
          onChange={(el) => {
            const tok: keyof typeof language | undefined = Object.keys(
              language
            ).find(
              (item) => language[item as keyof typeof language].name === el
            ) as keyof typeof language | undefined;
            if (!tok) return;
            dispatch(uiActions.setLanguage(tok));
            localStorage.setItem("language", tok);
          }}
          languages={Object.keys(language).map(
            (el) => language[el as keyof typeof language].name
          )}
          $top="large"
        />
      </SettingsControls>
      <RowLine />
      <Flex $top="53px"></Flex>
      <Links basis="50%" gap="6px" wrap="wrap">
        <ButtonLink type="blue">
          {language[lang]["modals"]["support"]}
        </ButtonLink>
        <ButtonLink onClick={() => showModal(showPrivacy(lang))} type="blue">
          {language[lang]["modals"]["privacy"]}
        </ButtonLink>
        <ButtonLink type="blue">{language[lang]["modals"]["faq"]}</ButtonLink>
        <ButtonLink type="blue">
          {language[lang]["modals"]["termsOfService"]}
        </ButtonLink>
      </Links>
    </SettingsWrapper>
  );
};
