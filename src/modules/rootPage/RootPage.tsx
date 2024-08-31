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
import {
  planets,
  showAd,
  showBattlePass,
  showNews,
  showSettings,
} from "./constants";
import { formatNumber } from "@lib/utils/formatNumber";
import { showModal } from "@lib/utils/modal";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { useNavigate } from "react-router-dom";
import { fetchStartGame } from "@store/levelGame/thunks";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { enqueueSnackbar } from "notistack";
import { formatTime } from "@lib/utils/formatTime";
import PageNotFound from "@modules/pageNotFound/PageNotFound";
import { language } from "@constants/language";

export const RootPage = () => {
  const [openModal] = useModal();
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const user = useSelector(uiSelectors.getUser);
  const locations = useSelector(uiSelectors.getLocations);
  const location = locations.filter((el) => el.isAvailable).at(-1);
  const soundSfx = usePlaySFx();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const levels = useSelector(uiSelectors.getLevels);
  const lang = useSelector(uiSelectors.getLanguage);
  const currentLevel =
    location && levels && levels[location.id]
      ? levels[location.id].filter((el) => !el.isCompleted)[0]
      : null;

  if (!currentLevel) return <PageNotFound />;
  const handlePlay = () => {
    if (!location || !user) return;
    if (user.hearts < 1) {
      enqueueSnackbar("У вас недостаточно сердец!");
      return;
    }
    navigate("/game");
    dispatch(fetchStartGame(currentLevel.number, location.number, `/`));
    soundSfx();
  };
  return (
    <>
      <Content>
        <RootControls>
          {user && (
            <>
              <Flex basis="50%" $top="6px" gap="12px" wrap="wrap">
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
              <HealthWrapper $top="22px">
                <ActionButton
                  icon={<PlusIcon size={20} color="#fff" />}
                  onClick={() => {
                    soundSfx();
                    navigate("/shop");
                  }}
                />
                <Flex gap="5px">
                  {[...Array(7)].map((_, i) => {
                    if (i < user.hearts) return <ActiveHeartIcon size={21} />;
                    else return <NotActiveHeartIcon size={21} />;
                  })}
                </Flex>
                <Text $size="subtitle">
                  {formatTime(user.heartRecoveryTimeSeconds)}
                </Text>
              </HealthWrapper>
            </>
          )}
          <Flex gap="12px" $top="slarge" justify="space-between">
            <ButtonPass
              onClick={() => {
                soundSfx();
                showModal(showBattlePass(lang));
              }}
              type="yellow"
            >
              {language[lang]["root"]["battlePass"]}
            </ButtonPass>
            <StyledIconButton
              onClick={() => {
                soundSfx();
                showModal(showAd(lang));
              }}
              type="blue"
              icon={<AdIcon size={33} />}
            />
            <StyledIconButton
              onClick={() => {
                soundSfx();
                showModal(showNews(lang));
              }}
              type="blue"
              icon={<NewsIcon size={33} />}
            />
            <StyledIconButton
              onClick={() => {
                soundSfx();
                openModal(showSettings(lang));
              }}
              type="blue"
              icon={<SettingsIcon size={33} />}
            />
          </Flex>
        </RootControls>
        <PlanetClick>
          {location && <PlanetImage src={planets[location.number - 1]} />}
        </PlanetClick>
        <StyledFlex>
          {location && (
            <StyledSubHeader>
              {location.number} {language[lang]["root"]["season"]} •{" "}
              {currentLevel.number} {language[lang]["root"]["level"]}
            </StyledSubHeader>
          )}
          <StyledButtonShadow>
            <StyledButton onClick={handlePlay} padding="24px 100px" type="pink">
              <div>
                <div>{language[lang]["root"]["play"]}</div>
              </div>
            </StyledButton>
          </StyledButtonShadow>
        </StyledFlex>
      </Content>
    </>
  );
};
