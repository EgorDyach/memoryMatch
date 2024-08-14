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
  Wrapper,
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

const ShopItem = styled(Flex)`
  background-color: #0000004d;
  padding: 9px;
  border-radius: 10px;
`;

const StyledItemTitle = styled(ItemTitle)`
  color: #fff;
  ${textShadow(content.secondary, 2, 1)}
`;

const StyledImage = styled(Flex)`
  padding: 19px 20px;
  border-radius: 10px;
  border: 2px solid #698cad;
  background: ${gradients.shopCard};
`;

const StyledSubTitle = styled(Text)`
  color: #fff;
  -webkit-text-stroke: 1px #092e46;
  text-shadow: 0px 2px #092e46;
`;

const StyledButton = styled(Button)`
  width: 100%;
  ${textShadow(shadows.yellow, 2, 1)}
  ${shadow("min")}
`;

export const ShopPage = () => {
  return (
    <Wrapper direction="column">
      <TopBlur />
      <Content>
        <Flex basis="50%" gap="15px" wrap="wrap">
          <IndicatorItem
            action={() => console.log("click")}
            value={11111111}
            icon={<CoinIcon size={53} />}
          />
          <IndicatorItem
            action={() => console.log("click")}
            value={11111111}
            icon={<DiamondIcon size={43} />}
          />
        </Flex>
        <HealthWrapper>
          <ActionButton
            icon={<PlusIcon size={20} color="#fff" />}
            onClick={() => console.log(123)}
          />
          <Flex gap="8px">
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <ActiveHeartIcon size={20} />
            <NotActiveHeartIcon size={20} />
            <NotActiveHeartIcon size={20} />
          </Flex>
          <Text $size="subtitle">11:11</Text>
        </HealthWrapper>
      </Content>
      <Title $top="medium" type="pink" hasStars>
        Sales
      </Title>
      <Flex
        $top="large"
        gap="10px"
        basis="30%"
        wrap="wrap"
        justify="space-between"
      >
        {shopSales.map((item) => (
          <ShopItem gap="11px" align="center" direction="column">
            <StyledItemTitle>{item.title}</StyledItemTitle>
            <StyledImage align="center" justify="center">
              <DiamondIcon size={60} />
            </StyledImage>
            <StyledSubTitle $size="subtitle">x{item.count}</StyledSubTitle>
            <StyledButton type="yellow" padding="12px 0">
              ${item.price}
            </StyledButton>
          </ShopItem>
        ))}
      </Flex>
      <Title $top="xlarge" type="red" hasStars>
        Crystall
      </Title>
      <Flex
        $top="large"
        gap="10px"
        basis="30%"
        wrap="wrap"
        justify="space-between"
      >
        {shopCrystall.map((item) => (
          <ShopItem gap="11px" align="center" direction="column">
            <StyledItemTitle>{item.title}</StyledItemTitle>
            <StyledImage align="center" justify="center">
              <DiamondIcon size={60} />
            </StyledImage>
            <StyledSubTitle $size="subtitle">x{item.count}</StyledSubTitle>
            <StyledButton type="yellow" padding="12px 0">
              ${item.price}
            </StyledButton>
          </ShopItem>
        ))}
      </Flex>
      <Flex $top="large"></Flex>
    </Wrapper>
  );
};
