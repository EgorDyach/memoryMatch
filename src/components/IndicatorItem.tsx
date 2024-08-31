import { FC, ReactNode } from "react";
import Flex, { FlexProps } from "./Flex";
import styled from "styled-components";
import { Text } from "./Typography";
import IconButton from "./button/IconButton";
import PlusIcon from "./icons/PlusIcon";

interface IndicatorItemProps extends FlexProps {
  value: number | string;
  icon: ReactNode;
  action?: VoidFunction;
}

const IndicatorWrapper = styled(Flex)<{ $isAction?: boolean }>`
  padding: ${(props) => (props.$isAction ? "3px 10px 0px" : "7px 14px")};
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
  top: -4px;
  padding: 6px 5px;
`;

const ActionIcon = styled.div`
  position: absolute;
  top: -9px;
  right: -1px;
`;

const NoActionIcon = styled.div`
  position: absolute;
  left: 0;
`;

const StyledText = styled(Text)`
  font-size: 14px;
`;
export const IndicatorItem: FC<IndicatorItemProps> = ({
  value,
  action,
  icon,
  ...props
}) => {
  if (action)
    return (
      <IndicatorWrapper {...props} $isAction={true}>
        <ActionButton
          icon={<PlusIcon size={20} color="#fff" />}
          onClick={action}
        />
        <StyledText>{value}</StyledText>
        <ActionIcon>{icon}</ActionIcon>
      </IndicatorWrapper>
    );
  return (
    <IndicatorWrapper {...props}>
      <StyledText $size="small">{value}</StyledText>
      <NoActionIcon>{icon}</NoActionIcon>
    </IndicatorWrapper>
  );
};
