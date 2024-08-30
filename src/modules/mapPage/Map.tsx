import { ItemTitle } from "@components/Typography";
import { shadow, textShadow } from "@lib/theme/shadow";
import { MapLevel } from "@type/map";
import { FC } from "react";
import styled from "styled-components";
import { MapTooltip } from "./MapTooltip";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { fetchStartGame } from "@store/levelGame/thunks";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import { enqueueSnackbar } from "notistack";

interface MapProps {
  points: MapLevel[];
  currentLevel: number;
}

type PointStatus = "done" | "current" | "not_done";

const statusColor: Record<
  "background" | "text",
  Record<PointStatus, string>
> = {
  background: {
    done: "#3FE558",
    current: "#FEBC01",
    not_done: "#E3B499",
  },
  text: {
    done: "#007105",
    current: "#E0622C",
    not_done: "#754A2C",
  },
};

const StyledButton = styled.button<{
  $status: PointStatus;
}>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => statusColor.background[props.$status]};
  ${shadow("full")};
`;

const StyledTitle = styled(ItemTitle)<{ $status: PointStatus }>`
  color: #fff;
  ${(props) => textShadow(statusColor.text[props.$status], 4, 2)};
`;

const getStatusLevel = (point: MapLevel, currentLevel: number): PointStatus => {
  if (point.id < currentLevel) return "done";
  if (point.id === currentLevel) return "current";
  return "not_done";
};

export const Map: FC<MapProps> = ({ points, currentLevel }) => {
  const soundSfx = usePlaySFx();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { seasonId = "" } = useParams();
  const user = useSelector(uiSelectors.getUser);
  const handleClick = async (level: MapLevel) => {
    if (level.id !== currentLevel || !user) return;
    if (user.hearts < 1) {
      enqueueSnackbar("У вас недостаточно сердец!");
      return;
    }
    try {
      navigate(`/game`);
      dispatch(fetchStartGame(level.id, seasonId, pathname));
      soundSfx();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 387 1242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2011_930)">
        <path
          d="M186.11 1236.5C186.11 1092 403.11 1256.5 354.61 1095.5C320.057 980.799 117.61 1187.5 37.1096 1128C-43.3905 1068.5 45.6098 929.147 186.11 1007C326.61 1084.85 413.61 965.5 347.61 914C281.61 862.5 135.134 953.845 55.6098 931C-23.9141 908.155 1.09878 824.809 37.1096 805.186C73.1204 785.563 128.583 822.94 216.11 857.5C303.637 892.06 478.11 784 318.61 736C236.585 717.548 112.11 842.5 37.1096 750C7.59374 713.597 22.0565 631.5 55.6098 667.5C103.61 719 186.11 691.765 186.11 657.5"
          stroke="#E6B69C"
          strokeOpacity="0.43"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="15 15"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_2011_930)">
        <path
          d="M186.11 669.5C186.11 525 403.11 689.5 354.61 528.5C320.057 413.799 117.61 620.5 37.1096 561C-43.3905 501.5 45.6098 362.147 186.11 440C326.61 517.853 413.61 398.5 347.61 347C281.61 295.5 135.134 386.845 55.6098 364C-23.9141 341.155 1.09878 257.809 37.1096 238.186C73.1204 218.563 128.583 255.94 216.11 290.5C303.637 325.06 478.11 217 318.61 169C236.585 150.548 112.11 275.5 37.1096 183C7.59374 146.597 22.0565 64.5 55.6098 100.5C103.61 152 276.5 54 262 3"
          stroke="#E6B69C"
          strokeOpacity="0.43"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="15 15"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2011_930"
          x="0.0284424"
          y="654.5"
          width="386.356"
          height="587"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2011_930"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2011_930"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2011_930"
          x="0.0284424"
          y="-0.000762939"
          width="386.356"
          height="674.501"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2011_930"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2011_930"
            result="shape"
          />
        </filter>
      </defs>
      {points.map((point, index) => (
        <g key={index}>
          {point.reward && (
            <foreignObject
              x={
                point.reward.placement === "left"
                  ? point.positionX - 40
                  : point.reward.placement === "right"
                  ? point.positionX + 40
                  : point.positionX - 6
              }
              y={
                point.reward.placement === "top"
                  ? point.positionY - 85
                  : point.reward.placement === "bottom"
                  ? point.positionY + 85
                  : point.positionY - 6
              }
              width={
                point.reward.placement === "left" ||
                point.reward.placement === "right"
                  ? 95
                  : 67
              }
              height={82}
            >
              <MapTooltip
                count={point.reward.count}
                icon={point.reward.type}
                placement={point.reward.placement}
              />
            </foreignObject>
          )}
          <foreignObject
            x={point.positionX}
            y={point.positionY}
            width={45}
            height={45}
          >
            <StyledButton
              $status={getStatusLevel(point, currentLevel)}
              onClick={() => handleClick(point)}
            >
              <StyledTitle $status={getStatusLevel(point, currentLevel)}>
                {point.id}
              </StyledTitle>
            </StyledButton>
          </foreignObject>
        </g>
      ))}
    </svg>
  );
};
