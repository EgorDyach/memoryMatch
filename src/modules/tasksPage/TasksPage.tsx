import { Card } from "@components/Card";
import Flex from "@components/Flex";
import { Title } from "@components/Title";
import { progressData, socials } from "./constants";
import { ItemTitle, Text } from "@components/Typography";
import { content } from "@lib/theme/colors";
import { ProgressBar } from "@components/ProgressBar";
import CheckIcon from "@components/icons/CheckIcon";
import { formatNumber } from "@lib/utils/formatNumber";
import DiamondWithShadowIcon from "@components/icons/DiamondWithShadowIcon";
import {
  SocialIconWrapper,
  StyledButton,
  StyledProgressValues,
  StyledCurrent,
  RewardsWrapper,
  Reward,
  StyledText,
  SocialItem,
} from "./tasksStyles";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { language } from "@constants/language";
import { useSelector } from "react-redux";
import { uiSelectors } from "@store/ui";
import { fetchCompleteTask } from "@store/ui/thunks";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const TasksPage = () => {
  const quests = useSelector(uiSelectors.getTasks);
  const questsCompleted = useSelector(uiSelectors.getTasksCompleted);
  const soundSfx = usePlaySFx();
  const dispatch = useAppDispatch();
  const lang = useSelector(uiSelectors.getLanguage);
  return (
    <>
      <Title $top="35px" type="pink" hasStars>
        <ItemTitle>{language[lang]["tasks"]["socials"]}</ItemTitle>
      </Title>
      <Card
        $top="large"
        title={language[lang]["tasks"]["subscribe"]}
        backgroundColor="#99C0E3"
        contentColor="#DDEAEE"
        titleShadowColor="#092E46"
      >
        <>
          <Flex justify="space-between" gap="10px">
            {socials
              .sort((a, b) => a.id - b.id)
              .map((item, index) => (
                <SocialItem key={index} direction="column" align="center">
                  <SocialIconWrapper align="center" justify="center">
                    {item.icon}
                  </SocialIconWrapper>
                  <StyledText
                    $top="5px"
                    $shadow={{
                      color: content.secondary,
                      strokeWidth: 1,
                      shadowSize: 2,
                    }}
                  >
                    {language[lang]["tasks"][item.title]}
                  </StyledText>
                  <StyledButton
                    onClick={async () => {
                      const curQuest = quests.filter(
                        (el) => el.type === item.id
                      )[0];
                      window.Telegram.WebApp.openLink(item.link);
                      dispatch(fetchCompleteTask(curQuest.id));
                      soundSfx();
                    }}
                    $top="3px"
                    type="yellow"
                    disabled={
                      !!questsCompleted.find((quest) => quest.type === item.id)
                    }
                  >
                    {
                      language[lang]["tasks"][
                        questsCompleted.find((quest) => quest.type === item.id)
                          ? "completed"
                          : "join"
                      ]
                    }
                  </StyledButton>
                </SocialItem>
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
                $left={(questsCompleted.length * 100) / quests.length}
                type="yellow"
                padding="10px 16px"
              >
                {questsCompleted.length}
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
              active={questsCompleted.length}
              total={quests.length}
              color1="#FB0059"
              color2="#890E3A"
              bgColor="#440A1F"
            />
            <RewardsWrapper>
              {progressData.rewards.map((item, index) => (
                <Reward
                  key={index}
                  align="center"
                  gap="2px"
                  $leftPercent={item.percent >= 95 ? 95 : item.percent}
                >
                  {(questsCompleted.length * 100) / quests.length >=
                    item.percent && <CheckIcon size={14} />}
                  {(questsCompleted.length * 100) / quests.length <
                    item.percent && (
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
