import { FC, useState } from "react";
import Flex from "./Flex";
import styled from "styled-components";
import { Text } from "./Typography";
import { textShadow } from "@lib/theme/shadow";
import { content } from "@lib/theme/colors";

interface ToggleProps {
  values: string[];
  activeValue?: string;
  onChange?: (activeVal: string) => void;
}

const ToggleWrapper = styled(Flex)`
  background-color: #8a8a8a;
  border-radius: 12px;
  box-shadow: 0px 2.05px 0px 0px #ffffff40 inset,
    0px -2.05px 0px 0px #00000040 inset, 0px 1.03px 3.59px 0px #00000040,
    0px 2.46px 0px 0px #0000001a;
  position: relative;
`;

const ToggleBg = styled.span<{ $activeIndex: number }>`
  background-color: ${(props) => (props.$activeIndex ? "#FB4146" : "#3FE558")};
  box-shadow: 0px 2.05px 0px 0px #ffffff40 inset,
    0px -2.05px 0px 0px #00000040 inset;
  transition: background-color 0.5s ease, transform 0.5s ease;
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transform: translateX(${(props) => (props.$activeIndex ? "100%" : 0)});
  z-index: 0;
  border-radius: 12px;
`;

const ToggleItem = styled(Flex)`
  z-index: 1;
  padding: 17px 45px;
  border-radius: 12px;
`;

const ToggleText = styled(Text)`
  ${textShadow(content.secondary, 2.46, 0.99)}
`;

export const Toggle: FC<ToggleProps> = ({ values, activeValue, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(
    values.findIndex((item) => item === activeValue) || 0
  );

  const onClick = () => {
    if (activeIndex) {
      setActiveIndex(0);
      if (onChange) onChange(values[0]);
    } else {
      setActiveIndex(1);
      if (onChange) onChange(values[1]);
    }
  };

  return (
    <ToggleWrapper onClick={onClick} basis="50%">
      <ToggleBg $activeIndex={activeIndex} />
      {values.map((item, index) => (
        <ToggleItem key={index}>
          <ToggleText>{item}</ToggleText>
        </ToggleItem>
      ))}
    </ToggleWrapper>
  );
};
