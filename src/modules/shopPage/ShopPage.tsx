import Flex from "@components/Flex";
import ActiveHeartIcon from "@components/icons/ActiveHeartIcon";
import CoinIcon from "@components/icons/CoinIcon";
import DiamondIcon from "@components/icons/DiamondIcon";
import NotActiveHeartIcon from "@components/icons/NotActiveHeartIcon";
import PlusIcon from "@components/icons/PlusIcon";
import { IndicatorItem } from "@components/IndicatorItem";
import { Title } from "@components/Title";
import { ItemTitle, Text } from "@components/Typography";
import {
  TopBlur,
  Content,
  HealthWrapper,
  ActionButton,
} from "@modules/rootPage/rootStyles";
import { shopCrystall, shopSales } from "./constants";
import styled from "styled-components";
import { content, gradients, shadows } from "@lib/theme/colors";
import Button from "@components/button/Button";
import { shadow, textShadow } from "@lib/theme/shadow";
import bg from "@assets/bg.svg";
import { formatNumber } from "@lib/utils/formatNumber";
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

const Wrapper = styled(Flex)`
  background: url(${bg}), ${gradients.mainBg};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
  min-height: 100vh;
  padding: 70px 24px 125px;
`;

export const ShopPage = () => {
  return (
    <Wrapper direction="column">
      <TopBlur />
      <Content>
        <Flex basis="50%" gap="12px" wrap="wrap">
          <IndicatorItem
            action={() => console.log("click")}
            value={formatNumber(11111111)}
            icon={<CoinIcon size={43} />}
          />
          <IndicatorItem
            action={() => console.log("click")}
            value={formatNumber(11111111)}
            icon={<DiamondIcon size={43} />}
          />
        </Flex>
        <HealthWrapper>
          <ActionButton
            icon={<PlusIcon size={20} color="#fff" />}
            onClick={() => console.log(123)}
          />
          <Flex gap="5px">
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <NotActiveHeartIcon size={21} />
            <NotActiveHeartIcon size={21} />
          </Flex>
          <Text $size="subtitle">11:11</Text>
        </HealthWrapper>
      </Content>
      <Title $top="slarge" type="pink" hasStars>
        Sales
      </Title>
      <CardsWrapper basis="30%" wrap="wrap" justify="space-between">
        {shopSales.map((item) => (
          <ShopItem align="center" direction="column">
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
        Crystall
      </Title>
      <Flex $top="large" basis="33%" wrap="wrap" justify="space-between">
        {shopCrystall.map((item) => (
          <ShopItem align="center" direction="column">
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
    </Wrapper>
  );
};
