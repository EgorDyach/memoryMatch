import { Map } from "./Map";
import { useNavigate, useParams } from "react-router-dom";
import { maps } from "./constants";
import { Title } from "@components/Title";
import styled from "styled-components";
import { ItemTitle, Text } from "@components/Typography";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import Flex from "@components/Flex";
import { shadow, textShadow } from "@lib/theme/shadow";
import IconButton from "@components/button/IconButton";
import BigArrowRightIcon from "@components/icons/BigArrowRightIcon";
import { usePlaySFx } from "@hooks/usePlaySFx";
const StyledTitle = styled(Title)`
  position: fixed;
  top: 60px;
  left: 24px;
  right: 24px;
  width: auto;
  z-index: 2;
`;
const ActionButton = styled(IconButton)`
  position: absolute;
  right: 5px;
  ${shadow("min")}
`;

const StyledPercent = styled(Text)<{ $bg: string; $shadow: string }>`
  padding: 5px;
  font-size: 21px;
  ${(props) => textShadow(props.$shadow)};
  background-color: ${(props) => props.$bg};
  border-radius: 5px;
`;

export const MapPage = () => {
  const locations = useSelector(uiSelectors.getLocations);
  const { seasonId = 0 } = useParams();
  const navigate = useNavigate();
  const soundSfx = usePlaySFx();
  const map = maps.find((el) => el.id === Number(seasonId));
  if (!map) return;
  const currentLocation = locations.find(
    (el) => el.id === Number(seasonId)
  );
  console.log(currentLocation)
  if (!currentLocation || !currentLocation.isAvailable) return;
  return (
    <>
      <StyledTitle
        actionButton={
          <ActionButton
            onClick={() => {
              soundSfx();
              navigate("/map");
            }}
            icon={<BigArrowRightIcon size={18} />}
            type="yellow"
          />
        }
        customColor={{
          color: map.colors.titleColor,
          backgroundColor: map.colors.backgroundColor,
          borderTop: `1px solid ${
            map.colors.titleShadowColor || "transparent"
          }`,
          shadowColor: map.colors.titleShadowColor || "transparent",
        }}
      >
        <Flex align="center">
          <ItemTitle>{currentLocation.name}</ItemTitle>
          <StyledPercent
            $left="small"
            $bg={map.colors.percentBackgroundColor}
            $shadow={map.colors.percentShadowColor || "transparent"}
          >
            {Math.ceil(((currentLocation.number-1) / 40) * 100)}%
          </StyledPercent>
        </Flex>
      </StyledTitle>
      <Flex $top="100px">
        <Map points={map.levels} currentLevel={currentLocation.number} />
      </Flex>
    </>
  );
};
