import Flex from "@components/Flex";
import DiamondIcon from "@components/icons/DiamondIcon";
import { Title } from "@components/Title";
import { ItemTitle, Text } from "@components/Typography";
import { shopCrystall, shopSales } from "./constants";
import styled from "styled-components";
import { content, gradients, shadows } from "@lib/theme/colors";
import Button from "@components/button/Button";
import { shadow, textShadow } from "@lib/theme/shadow";

const ShopItem = styled(Flex)`
  background-color: #0000004d;
  padding: 5px 9px 9px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const StyledItemTitle = styled(ItemTitle)`
  color: #fff;
  font-size: 25px;
  ${textShadow(content.secondary, 2, 1)}
`;

const StyledImage = styled(Flex)`
  margin-top: 2px;
  padding: 16px 13px 20px;
  border-radius: 10px;
  border: 2px solid #698cad;
  background: ${gradients.shopCard};
`;

const StyledSubTitle = styled(Text)`
  color: #fff;
  margin-top: 9px;
  font-size: 21px;
  ${textShadow("#092e46", 2, 1)}
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px 0;
  margin-top: 6px;
  ${textShadow(shadows.yellow, 2, 1)}
  ${shadow("min")}
`;

const CardsWrapper = styled(Flex)`
  margin-top: 21px;
`;

export const ShopPage = () => {
  return (
    <>
      <Title $top="100px" type="pink" hasStars>
        <ItemTitle>Sales</ItemTitle>
      </Title>
      <CardsWrapper basis="30%" wrap="wrap" justify="space-between">
        {shopSales.map((item, index) => (
          <ShopItem key={index} align="center" direction="column">
            <StyledItemTitle>{item.title}</StyledItemTitle>
            <StyledImage align="center" justify="center">
              <DiamondIcon size={74} />
            </StyledImage>
            <StyledSubTitle>x{item.count}</StyledSubTitle>
            <StyledButton type="yellow">${item.price}</StyledButton>
          </ShopItem>
        ))}
      </CardsWrapper>
      <Title $top="xlarge" type="red" hasStars>
        <ItemTitle>Crystall</ItemTitle>
      </Title>
      <Flex $top="large" basis="33%" wrap="wrap" justify="space-between">
        {shopCrystall.map((item, index) => (
          <ShopItem key={index} align="center" direction="column">
            <Text $size="small">{item.title}</Text>
            <StyledImage align="center" justify="center">
              <DiamondIcon size={74} />
            </StyledImage>
            <StyledSubTitle>x{item.count}</StyledSubTitle>
            <StyledButton type="yellow">${item.price}</StyledButton>
          </ShopItem>
        ))}
      </Flex>
      <Flex $top="large"></Flex>
    </>
  );
};
