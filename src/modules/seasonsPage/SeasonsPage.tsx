import Flex from "@components/Flex";
import { seasons, TOTAL_LEVELS } from "./constants";
import { Card } from "@components/Card";
import Image from "@components/Image";
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

const StyledImage = styled(Image)`
  border-radius: 6.6px;
`;

const StyledText = styled(Text)`
  text-align: start;
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
  const user = useSelector(uiSelectors.getUser);
  if (!user) return;
  return (
    <Flex $top="large" direction="column" gap="26px">
      {seasons.map((item, index) => (
        <Card
          key={index}
          shadow="full"
          title={
            user.locations.find((el) => el.id === item.id)?.name || "World"
          }
          titleColor={item.colors.titleColor}
          titleShadowColor={item.colors.titleShadowColor}
          contentColor={item.colors.contentColor}
          backgroundColor={item.colors.backgroundColor}
        >
          <StyledContent direction="column">
            <Flex gap="11px">
              <StyledImage width={100} src={item.image} />
              <StyledText
                $color={item.colors.descriptionColor}
                $shadow={{
                  color: item.colors.descriptionShadowColor || "tranparent",
                }}
              >
                {item.description}
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
                Rewards
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
                  {item.rewards.coins}
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
                  {item.rewards.diamonds}
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
              {user?.locations.find((el) => el.id === item.id)?.isAvailable && (
                <StyledCurrent
                  $left={
                    ((user.locations.find((el) => el.id === item.id)?.number ||
                      0) /
                      TOTAL_LEVELS) *
                    100
                  }
                  type="yellow"
                  padding="10px 16px"
                >
                  {user.locations.find((el) => el.id === item.id)?.number || 0}
                </StyledCurrent>
              )}
              <Text
                $shadow={{
                  color: item.colors.progressBarColor2,
                  shadowSize: 2,
                  strokeWidth: 0.84,
                }}
              >
                {TOTAL_LEVELS}
              </Text>
            </StyledProgressValues>
            <ProgressBar
              $top="10px"
              active={
                user.locations.find((el) => el.id === item.id)?.number || 0
              }
              total={TOTAL_LEVELS}
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
              disabled={
                !user?.locations.find((el) => el.id === item.id)?.isAvailable
              }
              onClick={() => {
                soundSfx();
                navigate(AppRoutes.mapWithId(item.id));
              }}
            >
              <Text $size="subtitle">Continue</Text>
            </Button>
            {!user?.locations.find((el) => el.id === item.id)?.isAvailable && (
              <StyledBlur direction="column">
                <LockIcon size={48} color={item.colors.titleShadowColor} />
                <Text
                  $size={"subtitle"}
                  $top="small"
                  $shadow={{
                    color: item.colors.titleShadowColor || "transparent",
                  }}
                >
                  To gain access to this level,
                  <br />
                  you need to complete the
                  <br /> previous levels by 100%
                </Text>
              </StyledBlur>
            )}
          </StyledContent>
        </Card>
      ))}
    </Flex>
  );
};
