import { Card } from "@components/Card";
import Flex from "@components/Flex";
import { Title } from "@components/Title";
import { socialButtonContent, socials } from "./constants";
import { Text } from "@components/Typography";
import { content, gradients } from "@lib/theme/colors";
import styled from "styled-components";
import { shadow } from "@lib/theme/shadow";
import Button from "@components/button/Button";

const SocialIconWrapper = styled(Flex)`
  background: ${gradients.shopCard};
  ${shadow(
    "custom",
    "0px 1.33px 0px 0px #0000001A, 0px 0.67px 0px 0px #698CAD"
  )};
  border: 0.67px solid #698cad;
  border-radius: 6.67px;
  height: 75px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  padding: 10px 4px;
  width: 100%;

  &:disabled {
    font-size: 13px;
  }
`;

export const TasksPage = () => {
  return (
    <>
      <Title $top="35px" type="pink" hasStars>
        Socials
      </Title>
      <Card
        $top="large"
        title="Subscribe to all social networks"
        backgroundColor="#99C0E3"
        contentColor="#DDEAEE"
        titleColor="#092E46"
      >
        <>
          <Flex justify="space-between" basis="21%">
            {socials.map((item, index) => (
              <Flex key={index} direction="column" align="center">
                <SocialIconWrapper align="center" justify="center">
                  {item.icon}
                </SocialIconWrapper>
                <Text
                  $top="5px"
                  $shadow={{
                    color: content.secondary,
                    strokeWidth: 1,
                    shadowSize: 2,
                  }}
                >
                  {item.title}
                </Text>
                <StyledButton $top="3px" type="yellow" disabled={item.is_done}>
                  {socialButtonContent[String(item.is_done)]}
                </StyledButton>
              </Flex>
            ))}
          </Flex>
          <Flex></Flex>
        </>
      </Card>
    </>
  );
};
