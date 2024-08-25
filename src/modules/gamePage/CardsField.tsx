import caveCardBg from "/img/cardbgs/caveCardBg.webp";
import aztecCardBg from "/img/cardbgs/aztecCardBg.png";
import aztecCardBg2 from "/img/cardbgs/aztecCardBg2.png";
import knightBg from "/img/cardbgs/knightCardBg.webp";
import steamBg from "/img/cardbgs/steamCardBg.webp";
import todayBg from "/img/cardbgs/todayCardBg.webp";
import cyberBg from "/img/cardbgs/cyberCardBg.webp";

import Flex from "@components/Flex";
import Image from "@components/Image";
import { Text } from "@components/Typography";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "@type/game";
import { levelGameSelectors } from "@store/levelGame";

const seasonName = [
  "default",
  "cave",
  "aztec",
  "knight",
  "steam",
  "today",
  "cyber",
  "end",
];
const CardsWrapper = styled(Flex)`
  margin-top: 20px;
  display: flex;
  height: 100%;
`;

const StyledCard = styled(Flex)`
  aspect-ratio: 88/ 121;
  cursor: pointer;
  position: relative;
  height: min-content;
`;

const CardContent = styled(Flex)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  backface-visibility: hidden;
  position: absolute;
  transition: transform 0.4s linear;
`;

const FrontCard = styled(CardContent)<{
  $isActive: boolean;
  $seasonId: number;
  $randomNum: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-size: 1em;
  z-index: 2;
  & > div {
    border: 2px solid;
    width: 100%;
    height: 100%;
  }
  transform: rotateY(${(props) => (props.$isActive ? "180deg" : "0deg")});
  box-shadow: 0px 3px 0px 0px #00000040;
  background-position: 100px 100px;
  position: relative;
  ${({ $seasonId, $randomNum }) => {
    switch ($seasonId) {
      case 2:
        return `&::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1000px;
          height: 1000px;
          transform: translate(-50%, -50%) rotate(${$randomNum * 10}deg);
          background-position: 0 0;
          background-size: contain;
          background: url(${$randomNum % 3 === 0 ? aztecCardBg : aztecCardBg2});
          }
          background-repeat: no-repeat;
          background: #049975;
          background-position: center;
          & div {
            z-index: 2;
            color: #033E3A;
          }
          & > div {
            border-color: #033E3A;
            }`;
      case 1:
        return `background: url(${caveCardBg}),#FDB446;
        background-position: ${$randomNum * 50}% ${$randomNum * 50}%;
          & div {
            z-index: 2;
            color: #452C04;
          }
        & > div {
          border-color: #452C04;
          }`;
      case 6:
        return `&::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 400%;
          height: 400%;
          transform:  translate(-50%, -50%) rotate(${$randomNum}deg);
          background-position: center;
          background: url(${cyberBg});
          background-repeat: repeat;
          }
          & div {
            z-index: 2;
            color: #fff;
          }
          & > div {
            border-color: #fff;
            }
        background: #C521D3;
          & > div {
        }`;
      case 7:
        return `&::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 400%;
          height: 400%;
          background-position: center;
            background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 20px,
    #DFA100 20px,
    #DFA100 40px
  );
          background-repeat: repeat;
          }
          & div {
            z-index: 2;
            color: #533C00;
          }
          & > div {
            border-color: #533C00;
            }
        background: #FFD029;
          `;
      case 3:
        return `background: url(${knightBg}), #3BCECA;
          background-position: center;
          background-size: contain;
          & div {
            z-index: 2;
            color: #0A5954;
          }
          & > div {
          border-color: #0A5954;
        }`;
      case 4:
        return `background: #2a7eb9;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 300%;
          height: 300%;
          transform: translate(-50%, -50%) rotate(${$randomNum * 10}deg);
          background-position: ${$randomNum * 5}px ${$randomNum * 5}px;
          background-size: ${$randomNum / 10}%;
          background: url(${steamBg});
          }
          background-repeat: no-repeat;
          background: #993A04;
          & div {
            z-index: 2;
            color: #FFCF52;
          }
          & > div {
            border-color: #FFCF52;
            }
         `;
      case 5:
        return `&::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: ${$randomNum * 20}px;
          height: ${$randomNum * 18}px;
          background-size: 10%;
          transform: translate(-50%, -50%) scale(.6);
          background-position: ${$randomNum * 20}px ${$randomNum * 20}px;
          background: url(${todayBg});
          }
          & div {
            z-index: 2;
            color: #fff;
          }
          & > div {
            border-color: #fff;
            }
        background: #2167D3;
          & > div {
        }`;

      default:
        return `background: #2a7eb9;
        border: 1px solid #1d6699;
        box-shadow: 0px 2px 0px 0px #191f34, 0px 4.19px 0px 0px #00000040;
          & > div {
          border-color: #1d6699;
        }`;
    }
  }};
`;

const BackCard = styled(CardContent)<{ $isActive: boolean }>`
  transform: rotateY(${(props) => (props.$isActive ? "0deg" : "180deg")});
  background-color: #f1f1f1;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    text-align: center;
    color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-evenly;
    padding: 20px;
  }
`;

const StyledFrontText = styled(Text)<{ $size: number }>`
  font-size: ${(props) => 140 / props.$size}px;
  color: #1d6699;
`;

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: contain;
  height: 100%;
`;

interface CardsFieldProps {
  active1: Card | null;
  active2: Card | null;
  fields: GameCard[][];
  onClick: (card: GameCard) => void;
}

export type GameCard = { random: number } & Card;

export const CardsField: FC<CardsFieldProps> = ({
  fields,
  active1,
  active2,
  onClick,
}) => {
  const seasonId = useSelector(levelGameSelectors.getSeasonId);

  return (
    <CardsWrapper
      justify="space-between"
      basis={`${90 / fields.length}%`}
      gap="10px"
      wrap="wrap"
    >
      {fields.map((fieldRow) => (
        <>
          {fieldRow.map((item) => {
            return (
              <StyledCard key={item.id} onClick={() => onClick(item)}>
                <FrontCard
                  $seasonId={seasonId || 0}
                  $randomNum={item.random}
                  $isActive={
                    active1?.id === item.id ||
                    active2?.id === item.id ||
                    item.isFlipped
                  }
                >
                  <Flex justify="center" align="center">
                    <StyledFrontText $size={fields.length}>M</StyledFrontText>
                  </Flex>
                </FrontCard>
                <BackCard
                  $isActive={
                    active1?.id === item.id ||
                    active2?.id === item.id ||
                    item.isFlipped
                  }
                >
                  <StyledImage
                    src={`/img/cards/${seasonName[seasonId || 1]}/card${
                      item.cardTypeId
                    }.webp`}
                  />
                </BackCard>
              </StyledCard>
            );
          })}
        </>
      ))}
    </CardsWrapper>
  );
};
