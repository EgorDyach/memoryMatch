import Flex from "@components/Flex";
import { Title } from "@components/Title";
import { ItemTitle, Paragraph, Text } from "@components/Typography";
import { shopItems } from "./constants";
import styled from "styled-components";
import { content, gradients, shadows } from "@lib/theme/colors";
import Button from "@components/button/Button";
import { shadow, textShadow } from "@lib/theme/shadow";
import { language } from "@constants/language";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import { formatShopCount, getShopPrice } from "./helpers";
import Image from "@components/Image";

const ShopItem = styled(Flex)`
  background-color: #0000004d;
  padding: 5px 9px 9px;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 32%;
`;

const StyledItemTitle = styled(Paragraph)`
  color: #fff;
  font-size: 16px;
  flex: 1;
  ${textShadow(content.secondary, 2, 1)}
`;

const StyledImage = styled(Flex)`
  margin-top: 2px;
  padding: 5px;
  border-radius: 10px;
  max-width: 100%;
  aspect-ratio: 1 / 1;
  border: 2px solid #698cad;
  background: ${gradients.shopCard};
`;

const StyledSubTitle = styled(Text)`
  color: #fff;
  margin-top: 9px;
  font-size: 21px;
  ${textShadow("#092e46", 2, 1)}
`;

const StyledButton = styled(Button)<{
  $price_type: "dollar" | "ad" | "crystall";
}>`
  width: 100%;
  padding: ${(props) => (props.$price_type === "ad" ? 5 : 10)}px 0;
  margin-top: 6px;
  ${textShadow(shadows.yellow, 2, 1)}
  ${shadow("min")}
`;

const CardsWrapper = styled(Flex)`
  margin-top: 21px;
`;

export const ShopPage = () => {
  const lang = useSelector(uiSelectors.getLanguage);
  return (
    <>
      {shopItems.map((item) => (
        <>
          <Title $top="20px" type={item.type} hasStars>
            <ItemTitle>{language[lang]["shop"][item.title]}</ItemTitle>
          </Title>
          <CardsWrapper basis="32%" wrap="wrap" justify="space-between">
            {item.items.map((card, index) => (
              <ShopItem key={index} align="center" direction="column">
                <StyledItemTitle>
                  {language[lang]["shop"][card.title]}
                </StyledItemTitle>
                <StyledImage align="center" justify="center">
                  <Image src={card.img} width={"100%"} />
                </StyledImage>
                <StyledSubTitle>{formatShopCount(card.count)}</StyledSubTitle>
                <StyledButton $price_type={card.price_type} type="yellow">
                  {getShopPrice(card.price_type, card.price)}
                </StyledButton>
              </ShopItem>
            ))}
          </CardsWrapper>
        </>
      ))}
    </>
  );
};
