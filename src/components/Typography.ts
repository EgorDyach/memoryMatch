import { withIndentStyles } from "@hocs/withIndentStyles";
import styled from "styled-components";
import { FontSize } from "@type/common";
import { getFontSizes } from "@lib/theme/fonts";

export const Header = withIndentStyles(styled.h1``);

export const SubHeader = withIndentStyles(styled.h2``);
export const ItemTitle = withIndentStyles(styled.h3``);

export const Paragraph = withIndentStyles(styled.p``);

export const Bold = withIndentStyles(
  styled.b<{ $size?: FontSize; $color?: string; $display?: string }>(
    ({ $size, $color, $display }) => `
    ${getFontSizes($size || "default")}
    font-weight: 600;
    color: ${$color || "#fff"};
    display: ${$display || "inline-block"}
  `
  )
);

export const Text = withIndentStyles(
  styled.div<{ $size?: FontSize; $color?: string; $weight?: number }>(
    ({ $size, $color, $weight }) => `
    ${getFontSizes($size || "default")}
    color: ${$color || "#fff"};
    ${$weight && `font-weight: ${$weight};`}
  `
  )
);
