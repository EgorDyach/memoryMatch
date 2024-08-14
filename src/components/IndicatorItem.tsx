import { FC, ReactNode } from "react";
import Flex from "./Flex";
import styled from "styled-components";
import { Text } from "./Typography";
import IconButton from "./button/IconButton";
import PlusIcon from "./icons/PlusIcon";

interface IndicatorItemProps {
  value: number | string;
  icon: ReactNode;
  action?: VoidFunction;
}

const IndicatorWrapper = styled(Flex)<{ $isAction?: boolean }>`
  padding: ${(props) => (props.$isAction ? "7px 50px" : "7px 14px")};
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;
  justify-content: center;
  height: min-content;
  border-radius: 5px;
`;

const ActionButton = styled(IconButton)`
  position: absolute;
  left: 0;
`;

const ActionIcon = styled.div`
  position: absolute;
  right: 0;
`;

const NoActionIcon = styled.div`
  position: absolute;
  left: 0;
`;

export const IndicatorItem: FC<IndicatorItemProps> = ({
  value,
  action,
  icon,
}) => {
  if (action)
    return (
      <IndicatorWrapper $isAction={true}>
        <ActionButton
          icon={<PlusIcon size={20} color="#fff" />}
          onClick={action}
        />
        <Text $size="subtitle">{value}</Text>
        <ActionIcon>{icon}</ActionIcon>
      </IndicatorWrapper>
    );
  return (
    <IndicatorWrapper>
      <Text $size="subtitle">{value}</Text>
      <NoActionIcon>{icon}</NoActionIcon>
    </IndicatorWrapper>
  );
};
