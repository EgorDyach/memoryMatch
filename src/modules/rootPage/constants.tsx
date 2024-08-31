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

export const showSettings: (lang: langType) => ShowModal = (lang) => ({
  title: language[lang]["modals"]["settings"],
  description: <Settings />,
  hideModal: closeModal,
  isMarkup: false,
  withCancel: true,
});

export const showBattlePass: (lang: langType) => ShowModal = (lang) => ({
  title: language[lang]["root"]["battlePass"],
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
  title: language[lang]["root"]["news"],
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
  title: language[lang]["root"]["ad"],
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
  title: language[lang]["modals"]["privacy"],
  isMarkup: true,
  withCancel: true,
  description: ` <h1>Data Collection</h1>
    <p>We may collect the following types of data:</p>

    <h2>1.1. Personal Data</h2>
    <p>When using the Game, we may collect personal data that you voluntarily provide to us, such as:</p>
    <ul>
        <li>Username;</li>
        <li>Email address;</li>
        <li>Other information necessary to use certain features of the Game.</li>
    </ul>

    <h2>1.2. Device Data</h2>
    <p>We may collect information about the device you use to access the Game, such as:</p>
    <ul>
        <li>Device type;</li>
        <li>Unique device identifiers;</li>
        <li>Operating system;</li>
        <li>Network information (e.g., IP address).</li>
    </ul>

    <h2>1.3. Usage Data</h2>
    <p>We may collect information on how you use the Game, including:</p>
    <ul>
        <li>Time and duration of sessions;</li>
        <li>Interactions with game elements;</li>
        <li>Errors and bugs.</li>
    </ul>

    <h1>Use of Data</h1>
    <p>Collected data may be used for the following purposes:</p>

    <h2>2.1. Ensuring Game Operation</h2>
    <ul>
        <li>Managing and supporting the operation of the Game;</li>
        <li>Personalizing your gaming experience;</li>
        <li>Sending notifications about important changes and updates.</li>
    </ul>

    <h2>2.2. Improving the Game</h2>
    <ul>
        <li>Analyzing and improving the functionality of the Game;</li>
        <li>Tracking and fixing errors;</li>
        <li>Conducting research and data analysis to improve service quality.</li>
    </ul>

    <h2>2.3. Communication with Users</h2>
    <ul>
        <li>Responding to your requests and feedback;</li>
        <li>Informing you about news, updates, and special offers.</li>
    </ul>

    <h1>Data Sharing</h1>
    <p>We do not share your personal data with third parties, except in the following cases:</p>
    <ul>
        <li>With your consent;</li>
        <li>To comply with legal requirements;</li>
        <li>Within partnership programs that support the operation of the Game (e.g., analytics and hosting services);</li>
        <li>In the event of a sale or reorganization of our company, if necessary to ensure the continued operation of the Game.</li>
    </ul>`,
  hideModal: closeModal,
});

export const planets = [cave, aztec, knight, steam, today, cyber, end];
