import Flex from "@components/Flex";
import { seasons } from "./constants";
import { Card } from "@components/Card";

import { styled } from "styled-components";
import { Text } from "@components/Typography";
import CoinIcon from "@components/icons/CoinIcon";
import DiamondIcon from "@components/icons/DiamondIcon";
import {
  StyledProgressValues,
  StyledCurrent,
} from "@modules/tasksPage/tasksStyles";
import { ProgressBar } from "@components/ProgressBar";
import Button from "@components/button/Button";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@lib/configs/routes";
import LockIcon from "@components/icons/LockIcon";
import { shadow } from "@lib/theme/shadow";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { language } from "@constants/language";

const StyledImage = styled.div<{ $src: string }>`
  border-radius: 6.6px;
  width: 100px;
  background-image: url(${(props) => props.$src});
  background-size: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const StyledText = styled(Text)`
  text-align: start;
  width: calc(100% - 120px);
`;

const StyledContent = styled(Flex)`
  position: relative;
`;

const StyledBlur = styled(Flex)`
  position: absolute;
  inset: 0;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  ${shadow("min")}

  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const SeasonsPage = () => {
  const navigate = useNavigate();
  const soundSfx = usePlaySFx();
  const locations = useSelector(uiSelectors.getLocations);
  const levels = useSelector(uiSelectors.getLevels);
  const lang = useSelector(uiSelectors.getLanguage);
  return (
    <Flex $top="large" direction="column" gap="26px">
      {seasons.map((item, index) => {
        const location = locations.find((el) => el.id === item.id);
        if (!location) return;
        return (
          <Card
            key={index}
            shadow="full"
            title={location.name || `Location ${index + 1}`}
            titleColor={item.colors.titleColor}
            titleShadowColor={item.colors.titleShadowColor}
            contentColor={item.colors.contentColor}
            backgroundColor={item.colors.backgroundColor}
          >
            <StyledContent direction="column">
              <Flex gap="11px">
                <StyledImage $src={item.image} />
                <StyledText
                  $color={item.colors.descriptionColor}
                  $shadow={{
                    color: item.colors.descriptionShadowColor || "tranparent",
                  }}
                >
                  {
                    language[lang]["seasons"][
                      `locationDescr${item.id as 1 | 2 | 3 | 4 | 5 | 6 | 7}`
                    ]
                  }
                </StyledText>
              </Flex>
              <Flex $top="large" align="center">
                <Text
                  $size="title"
                  $color={item.colors.titleColor}
                  $shadow={{
                    color: item.colors.titleShadowColor || "transparent",
                  }}
                >
                  {language[lang]["seasons"][`rewards`]}
                </Text>
                <Flex $left="large" align="center">
                  <CoinIcon size={34} />
                  <Text
                    $size="title"
                    $color={item.colors.titleColor}
                    $shadow={{
                      color: item.colors.titleShadowColor || "transparent",
                    }}
                  >
                    {(() => {
                      console.log(
                        (levels[location.id]
                          ? levels[location.id].reduce(
                              (prev, cur) => cur.prizes[0].count + prev,
                              0
                            )
                          : 0) +
                          (levels[location.id]
                            ? levels[location.id].reduce(
                                (prev, cur) =>
                                  (cur.specialPrizes[0]
                                    ? cur.specialPrizes[0].count
                                    : 0) + prev,
                                0
                              )
                            : 0)
                      );
                      return (
                        (levels[location.id]
                          ? levels[location.id].reduce(
                              (prev, cur) => cur.prizes[0].count + prev,
                              0
                            )
                          : 0) +
                        (levels[location.id]
                          ? levels[location.id].reduce(
                              (prev, cur) =>
                                (cur.specialPrizes[0]
                                  ? cur.specialPrizes[0].count
                                  : 0) + prev,
                              0
                            )
                          : 0)
                      );
                    })()}
                  </Text>
                </Flex>
                <Flex $left="small" align="center">
                  <DiamondIcon size={34} />
                  <Text
                    $size="title"
                    $color={item.colors.titleColor}
                    $shadow={{
                      color: item.colors.titleShadowColor || "transparent",
                    }}
                  >
                    {(levels[location.id]
                      ? levels[location.id].reduce(
                          (prev, cur) => cur.prizes[1].count + prev,
                          0
                        )
                      : 0) +
                      (levels[location.id]
                        ? levels[location.id].reduce(
                            (prev, cur) =>
                              (cur.specialPrizes[1]
                                ? cur.specialPrizes[1].count
                                : 0) + prev,
                            0
                          )
                        : 0)}
                  </Text>
                </Flex>
              </Flex>
              <StyledProgressValues $top="xlarge">
                <Text
                  $shadow={{
                    color: item.colors.progressBarColor2,
                    shadowSize: 2,
                    strokeWidth: 0.84,
                  }}
                >
                  0
                </Text>
                {location.isAvailable && (
                  <StyledCurrent
                    $left={
                      (levels[location.id].filter((el) => el.isCompleted)
                        .length /
                        levels[location.id].length) *
                      100
                    }
                    type="yellow"
                    padding="10px 16px"
                  >
                    {levels[location.id].filter((el) => el.isCompleted).length}
                  </StyledCurrent>
                )}
                <Text
                  $shadow={{
                    color: item.colors.progressBarColor2,
                    shadowSize: 2,
                    strokeWidth: 0.84,
                  }}
                >
                  {levels[location.id].length}
                </Text>
              </StyledProgressValues>
              <ProgressBar
                $top="10px"
                active={
                  levels[location.id].filter((el) => el.isCompleted).length
                }
                total={levels[location.id].length}
                color1={item.colors.progressBarColor1}
                color2={item.colors.progressBarColor2}
                bgColor={item.colors.progressBarBgColor}
                speed={1.5}
              />
              <Button
                padding="12px"
                type={item.colors.ButtonType}
                shadow="min"
                $top="medium"
                disabled={!location.isAvailable}
                onClick={() => {
                  soundSfx();
                  navigate(AppRoutes.mapWithId(item.id));
                }}
              >
                <Text $size="subtitle">
                  {language[lang]["seasons"]["continue"]}
                </Text>
              </Button>
              {!location.isAvailable && (
                <StyledBlur direction="column">
                  <LockIcon size={48} color={item.colors.titleShadowColor} />
                  <Text
                    $size={"subtitle"}
                    $top="small"
                    $shadow={{
                      color: item.colors.titleShadowColor || "transparent",
                    }}
                  >
                    {language[lang]["seasons"]["lockText"]}
                  </Text>
                </StyledBlur>
              )}
            </StyledContent>
          </Card>
        );
      })}
    </Flex>
  );
};
