import Flex from "@components/Flex";
import { IndicatorItem } from "@components/IndicatorItem";
import DiamondIcon from "@components/icons/DiamondIcon";
import CoinIcon from "@components/icons/CoinIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import AdIcon from "@components/icons/AdIcon";
import NewsIcon from "@components/icons/NewsIcon";
import {
  Content,
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
import PageNotFound from "@modules/pageNotFound/PageNotFound";
import { language } from "@constants/language";
import { Hearts } from "@components/Hearts";
import final from "/img/finalPhoto.jpg";
import styled from "styled-components";

const FinalImage = styled(PlanetImage)`
  z-index: -1;
  position: absolute;
  transform: none;
  height: 60%;
  top: 20px;
  width: unset;
  border-radius: 50%;
`;

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
              <Hearts action $top="22px" />
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
          {Object.values(levels)
            .flat()
            .filter((el) => !el.isCompleted).length &&
            location && <PlanetImage src={planets[location.number - 1]} />}
          {!Object.values(levels)
            .flat()
            .filter((el) => !el.isCompleted).length && (
            <FinalImage src={final} />
          )}
        </PlanetClick>
        <StyledFlex>
          {Object.values(levels)
            .flat()
            .filter((el) => !el.isCompleted).length &&
            location && (
              <StyledSubHeader>
                {location.number} {language[lang]["root"]["season"]} •{" "}
                {currentLevel.number} {language[lang]["root"]["level"]}
              </StyledSubHeader>
            )}
          {!Object.values(levels)
            .flat()
            .filter((el) => !el.isCompleted).length && (
            <StyledSubHeader>
              {language[lang]["root"]["thankYou"]}
            </StyledSubHeader>
          )}
          <StyledButtonShadow>
            <StyledButton
              disabled={
                !Object.values(levels)
                  .flat()
                  .filter((el) => !el.isCompleted).length
              }
              onClick={handlePlay}
              padding="24px 100px"
              type="pink"
            >
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
