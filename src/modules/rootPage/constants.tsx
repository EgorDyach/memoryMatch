import { ShowModal } from "@components/Modal/types";
import { Settings } from "./Settings";
import { closeModal } from "@lib/utils/modal";
import { Text } from "@components/Typography";
import { content } from "@lib/theme/colors";
import Flex from "@components/Flex";
import cave from "/img/planets/planet_cave.webp";
import aztec from "/img/planets/planet_aztec.webp";
import knight from "/img/planets/planet_knight.webp";
import steam from "/img/planets/planet_steam.webp";
import today from "/img/planets/planet_today.webp";
import cyber from "/img/planets/planet_cyber.webp";
import end from "/img/planets/planet_end.webp";
import { language } from "@constants/language";
import { langType } from "@store/ui/types";

export const showSettings: () => ShowModal = () => ({
  title: "settings",
  description: <Settings />,
  hideModal: closeModal,
  isMarkup: false,
  withCancel: true,
});

export const showBattlePass: (lang: langType) => ShowModal = (lang) => ({
  title: "battlePass",
  description: (
    <Flex style={{ margin: "0 auto" }} align="center">
      <Text
        $size="header"
        $shadow={{ color: content.secondary, shadowSize: 2, strokeWidth: 0.81 }}
      >
        {language[lang]["root"]["comingSoon"]}
      </Text>
    </Flex>
  ),
  hideModal: closeModal,
  isMarkup: false,
  withCancel: true,
});

export const showNews: (lang: langType) => ShowModal = (lang) => ({
  title: "news",
  description: (
    <Flex style={{ margin: "0 auto" }} align="center">
      <Text
        $size="header"
        $shadow={{ color: content.secondary, shadowSize: 2, strokeWidth: 0.81 }}
      >
        {language[lang]["root"]["comingSoon"]}
      </Text>
    </Flex>
  ),
  hideModal: closeModal,
  isMarkup: false,
  withCancel: true,
});

export const showAd: (lang: langType) => ShowModal = (lang) => ({
  title: "ad",
  description: (
    <Flex style={{ margin: "0 auto" }} align="center">
      <Text
        $size="header"
        $shadow={{ color: content.secondary, shadowSize: 2, strokeWidth: 0.81 }}
      >
        {language[lang]["root"]["comingSoon"]}
      </Text>
    </Flex>
  ),
  hideModal: closeModal,
  isMarkup: false,
  withCancel: true,
});

export const showPrivacy: (lang: langType) => ShowModal = (lang) => ({
  title: "privacy",
  isMarkup: true,
  withCancel: true,
  description: language[lang]["privacy"],
  hideModal: closeModal,
});

export const planets = [cave, aztec, knight, steam, today, cyber, end];
