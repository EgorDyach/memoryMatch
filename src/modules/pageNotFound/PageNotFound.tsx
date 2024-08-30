import styled from "styled-components";
import { Text } from "@components/Typography";
import { Link } from "react-router-dom";
import { lineHeightDict } from "@lib/theme/fonts";
import Button from "@components/button/Button";
import { textShadow } from "@lib/theme/shadow";

const StyledPageNotFound = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  height: 260px;
  margin: 76px auto 0;
  text-align: center;
`;
const StyledTextGray = styled.p`
  line-height: ${lineHeightDict.subtitle};
  margin-top: -12px;
  ${textShadow("#E0622C")};
`;

const StyledButtonLink = styled(Link)`
  color: #fff;
  ${textShadow("#E0622C")};
  text-decoration: none;
`;

const StyledNumbers = styled(Text)`
  font-size: 48px;
`;

const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <StyledNumbers $size="header" $color="#FEBC01">
        404
      </StyledNumbers>
      <Text $size="title" $top="medium">
        Страница не найдена
      </Text>
      <Text $size="subtitle" $color="#FEBC01">
        <StyledTextGray>
          Неправильно набран адрес
          <br />
          или такой страницы не существует
        </StyledTextGray>
      </Text>
      <Button type="yellow">
        <StyledButtonLink to={"/"}>Перейти на главную</StyledButtonLink>
      </Button>
    </StyledPageNotFound>
  );
};

export default PageNotFound;
