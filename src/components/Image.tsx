import styled from "styled-components";
import { withIndentStyles } from "@hocs/withIndentStyles";
import { radius } from "@lib/theme/sizes";

interface ImageProps {
  $size?: string;
  $width?: string;
  $height?: string;
}

const StyledImage = styled.img<ImageProps>`
  height: ${({ $size, $height }) => $size || $height};
  width: ${({ $size, $width }) => $size || $width};
  border-radius: ${radius.xLarge};
`;

const Image = withIndentStyles(StyledImage);

export default Image;
