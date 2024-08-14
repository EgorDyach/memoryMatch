import { FC, useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import { withIndentStyles } from "@hocs/withIndentStyles";
import { Text } from "./Typography";
import { textShadow } from "@lib/theme/shadow";
import { content } from "@lib/theme/colors";

interface LanguageSwiperProps {
  languages: string[];
  className?: string;
  onChange?: (newLang: string) => void;
}

const SwiperWrapper = styled(Flex)`
  background-color: #52a4db;
  box-shadow: 0px 2.11px 0px 0px #ffffff40 inset,
    0px -2.11px 0px 0px #00000040 inset, 0px 1.06px 3.7px 0px #00000040,
    0px 2.53px 0px 0px #0000001a;
  padding: 12px 20px;
  border-radius: 12px;
`;

const Language = styled(Text)`
  color: #ffffff;
  ${textShadow(content.secondary, 2.53, 1.02)};
`;

const RawLanguageSwiper: FC<LanguageSwiperProps> = ({
  languages,
  onChange,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevLanguage = () => {
    if (languages.length) {
      if (onChange)
        onChange(
          languages[
            currentIndex === 0 ? languages.length - 1 : currentIndex - 1
          ]
        );
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? languages.length - 1 : prevIndex - 1
      );
    }
  };
  const nextLanguage = () => {
    if (languages.length) {
      if (onChange)
        onChange(
          languages[
            currentIndex === languages.length - 1 ? 0 : currentIndex + 1
          ]
        );
      setCurrentIndex((prevIndex) =>
        prevIndex === languages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  return (
    <SwiperWrapper align="center" className={className} justify="space-between">
      <ArrowLeftIcon size={25} onClick={prevLanguage} />
      <Language $size="subtitle">{languages[currentIndex]}</Language>
      <ArrowRightIcon size={25} onClick={nextLanguage} />
    </SwiperWrapper>
  );
};

export const LanguageSwiper = withIndentStyles(RawLanguageSwiper);
