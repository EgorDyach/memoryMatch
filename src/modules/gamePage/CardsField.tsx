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
import { uiSelectors } from "@store/ui";
import { ThemeType } from "@store/ui/types";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const CardsWrapper = styled.div<{ $size: number }>`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$size}, 1fr);
  grid-template-rows: repeat(${(props) => props.$size}, 1fr);
  gap: 10px;
`;

const Card = styled(Flex)`
  aspect-ratio: 88/ 121;
  cursor: pointer;
  position: relative;
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
  $theme: ThemeType;
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
  ${({ $theme, $randomNum }) => {
    switch ($theme) {
      case "aztec":
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
      case "cave":
        return `background: url(${caveCardBg}),#FDB446;
        background-position: ${$randomNum * 50}% ${$randomNum * 50}%;
          & div {
            z-index: 2;
            color: #452C04;
          }
        & > div {
          border-color: #452C04;
          }`;
      case "cyber":
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
      case "end":
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
      case "knight":
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
      case "steam":
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
      case "today":
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

export type Card = {
  id: number;
  random: number;
  content: string;
  isOpen: boolean;
  img: string;
};

interface CardsFieldProps {
  size: number;
  active1: Card | null;
  active2: Card | null;
  fields: Card[];
  onClick: (card: Card) => void;
}

export const CardsField: FC<CardsFieldProps> = ({
  size,
  fields,
  active1,
  active2,
  onClick,
}) => {
  const theme = useSelector(uiSelectors.getTheme);
  return (
    <CardsWrapper $size={size}>
      {fields.map((item) => {
        return (
          <Card key={item.id} onClick={() => onClick(item)}>
            <FrontCard
              $theme={theme}
              $randomNum={item.random}
              $isActive={
                active1?.id === item.id ||
                active2?.id === item.id ||
                item.isOpen
              }
            >
              <Flex justify="center" align="center">
                <StyledFrontText $size={size}>M</StyledFrontText>
              </Flex>
            </FrontCard>
            <BackCard
              $isActive={
                active1?.id === item.id ||
                active2?.id === item.id ||
                item.isOpen
              }
            >
              <StyledImage src={item.img} />
            </BackCard>
          </Card>
        );
      })}
    </CardsWrapper>
  );
};
