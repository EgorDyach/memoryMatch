import { FontSize } from "@type/common";

interface FontData {
  name: string;
  fileName: string;
  weight?: number;
  style: string;
}

export const getFont = (
  { name, fileName, style, weight }: FontData,
  pathPrefix = ""
) => {
  return `@font-face {
    font-family: '${name}';
    src: 
      url(${pathPrefix + fileName}.woff2) format('woff2'),
      url(${pathPrefix + fileName}.woff) format('woff');
    font-weight: ${weight};
    font-style: ${style};
}`;
};

export const fonts: FontData[] = [
  {
    name: "panton",
    fileName: "panton",
    style: "normal",
  },
];

export const fontWeightsDict: Record<FontSize, number> = {
  small: 100,
  default: 200,
  title: 400,
  subheader: 400,
  header: 400,
  xsmall: 400,
  subtitle: 0,
};

export const lineHeightDict = {
  xsmall: "16px",
  small: "18px",
  default: "20px",
  subtitle: "25px",
  title: "30px",
  subheader: "35px",
  header: "37px",
};

export const fontDict: Record<FontSize, string> = {
  xsmall: "13px",
  small: "15px",
  default: "16px",
  subtitle: "20px",
  title: "24px",
  subheader: "28px",
  header: "29.13px",
};

export const getFontSizes = (size: FontSize) => {
  return `
    font-size: ${fontDict[size]};
    line-height: ${lineHeightDict[size]};
    font-weight: 400;
  `;
};
