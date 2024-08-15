import { Card } from "@components/Card";
import Flex from "@components/Flex";
import { Title } from "@components/Title";
import {
  progressData,
  socialButtonContent,
  socials as socialsConst,
} from "./constants";
import { Text } from "@components/Typography";
import { content, gradients } from "@lib/theme/colors";
import styled from "styled-components";
import { shadow } from "@lib/theme/shadow";
import Button from "@components/button/Button";
import { ProgressBar } from "@components/ProgressBar";
import { useState } from "react";
import CheckIcon from "@components/icons/CheckIcon";
import { formatNumber } from "@lib/utils/formatNumber";

import DiamondWithShadowIcon from "@components/icons/DiamondWithShadowIcon";

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

const StyledProgressValues = styled(Flex)`
  position: relative;
  justify-content: space-between;
`;

const RewardsWrapper = styled(Flex)`
  position: relative;
  height: 15px;
`;

const StyledCurrent = styled(Button)<{ $val: number }>`
  ${shadow("min")};
  position: absolute;
  top: 5px;
  transform: translate(-50%, -50%);
  transition: left 0.3s ease;
  left: ${(props) => props.$val}%;
`;

const Reward = styled(Flex)<{ $leftPercent: number }>`
  position: absolute;
  left: ${(props) => props.$leftPercent}%;
  bottom: 0;
  transform: translate(-50%, 50%);
`;

export const TasksPage = () => {
  const [socials, setSocials] = useState(socialsConst);
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
            {socials
              .sort((a, b) => a.id - b.id)
              .map((item, index) => (
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
                  <StyledButton
                    onClick={() =>
                      setSocials([
                        ...socials.filter((el) => el.id !== item.id),
                        { ...item, is_done: true },
                      ])
                    }
                    $top="3px"
                    type="yellow"
                    disabled={item.is_done}
                  >
                    {socialButtonContent[String(item.is_done)]}
                  </StyledButton>
                </Flex>
              ))}
          </Flex>
          <Flex $top="large" direction="column">
            <StyledProgressValues>
              <Text
                $shadow={{
                  color: "#B7134D",
                  shadowSize: 2,
                  strokeWidth: 0.84,
                }}
              >
                0
              </Text>
              <StyledCurrent
                $val={
                  (socials.filter((el) => el.is_done).length * 100) /
                  socials.length
                }
                type="yellow"
                padding="10px 16px"
              >
                {socials.filter((el) => el.is_done).length}
              </StyledCurrent>
              <Text
                $shadow={{
                  color: "#B7134D",
                  shadowSize: 2,
                  strokeWidth: 0.84,
                }}
              >
                {socials.length}
              </Text>
            </StyledProgressValues>
            <ProgressBar
              $top="10px"
              active={socials.filter((el) => el.is_done).length}
              total={socials.length}
              color1="#FB0059"
              color2="#890E3A"
              bgColor="#440A1F"
            />
            <RewardsWrapper>
              {progressData.rewards.map((item) => (
                <Reward
                  align="center"
                  gap="2px"
                  $leftPercent={item.percent >= 95 ? 95 : item.percent}
                >
                  {item.recieved && <CheckIcon size={14} />}
                  {!item.recieved && (
                    <>
                      <Text
                        $size="subtitle"
                        $shadow={{
                          color: content.secondary,
                          shadowSize: 1.03,
                          strokeWidth: 1.03,
                        }}
                      >
                        {formatNumber(item.count)}
                      </Text>
                      <DiamondWithShadowIcon size={16} />
                    </>
                  )}
                </Reward>
              ))}
            </RewardsWrapper>
          </Flex>
        </>
      </Card>
    </>
  );
};
