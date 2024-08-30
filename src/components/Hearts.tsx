import { formatTime } from "@lib/utils/formatTime";
import { HealthWrapper, ActionButton } from "@modules/rootPage/rootStyles";
import { uiSelectors } from "@store/ui";
import { useSelector } from "react-redux";
import Flex from "./Flex";
import ActiveHeartIcon from "./icons/ActiveHeartIcon";
import NotActiveHeartIcon from "./icons/NotActiveHeartIcon";
import PlusIcon from "./icons/PlusIcon";
import { Text } from "./Typography";
import { useTimer } from "@hooks/useTimer";

export const Hearts = () => {
  const user = useSelector(uiSelectors.getUser);
  const { timeLeft } = useTimer();
  if (!user) return;
  return (
    <HealthWrapper $top="10px">
      <ActionButton
        icon={<PlusIcon size={20} color="#fff" />}
        onClick={() => console.log(123)}
      />
      <Flex gap="5px">
        {[...Array(7)].map((_, i) => {
          if (i < user.hearts) return <ActiveHeartIcon size={21} />;
          else return <NotActiveHeartIcon size={21} />;
        })}
      </Flex>
      <Text $size="subtitle">{formatTime(timeLeft)}</Text>
    </HealthWrapper>
  );
};
