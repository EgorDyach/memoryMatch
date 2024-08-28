import Flex from "@components/Flex";
import Image from "@components/Image";
import { Text } from "@components/Typography";
import { FC } from "react";
import styled from "styled-components";
import { LocalGameCard } from "@store/localGame/types";
import { season } from "./constants";
const CardsWrapper = styled(Flex)`
  margin-top: 20px;
  display: flex;
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
  background: #2a7eb9;
  border: 1px solid #1d6699;
  box-shadow: 0px 2px 0px 0px #191f34, 0px 4.19px 0px 0px #00000040;
  & > div {
    border-color: #1d6699;
  }
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
  size: number;
  active1: LocalGameCard | null;
  active2: LocalGameCard | null;
  cardsP1: LocalGameCard[];
  cardsP2: LocalGameCard[];
  activePlayer: "P1" | "P2";
  onClick: (card: LocalGameCard) => void;
}

export const CardsField: FC<CardsFieldProps> = ({
  size,
  cardsP1,
  cardsP2,
  active1,
  active2,
  activePlayer,
  onClick,
}) => {
  return (
    <CardsWrapper
      justify="space-between"
      basis={`${90 / size}%`}
      gap="10px"
      wrap="wrap"
    >
      {[...Array(size ** 2)].map((_, index) => {
        const card = activePlayer === "P1" ? cardsP1[index] : cardsP2[index];
        if (!card) return;
        return (
          <Card key={card.id} onClick={() => onClick(card)}>
            <FrontCard
              $isActive={
                card.id === active1?.id ||
                card.id === active2?.id ||
                card.isFlipped
              }
            >
              <Flex justify="center" align="center">
                <StyledFrontText $size={size}>M</StyledFrontText>
              </Flex>
            </FrontCard>
            <BackCard
              $isActive={
                card.id === active1?.id ||
                card.id === active2?.id ||
                card.isFlipped
              }
            >
              <StyledImage
                src={`/img/cards/${season[card.season]}/card${card.imgId}.webp`}
              />
            </BackCard>
          </Card>
        );
      })}
    </CardsWrapper>
  );
};
