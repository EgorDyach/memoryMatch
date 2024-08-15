const shadowType = {
  full: "0px 2.05px 0px 0px #FFFFFF40 inset, 0px -2.05px 0px 0px #00000040 inset, 0px 1.03px 3.59px 0px #00000040, 0px 2.46px 0px 0px #0000001A;",
  min: "0px 2px 0px 0px #0000001a, 0px -1.67px 0px 0px #00000040 inset",
};

export const shadowWithTitle = (color: string) =>
  `0px 2px 0px 0px ${color}, 0px 4.19px 0px 0px #00000040;`;

export const shadow = (
  type: keyof typeof shadowType | "custom",
  customShadow?: string
): string => {
  if (type === "custom") return `box-shadow: ${customShadow};`;
  return `
    box-shadow: ${shadowType[type]};
  `;
};

export interface TextShadowProps {
  color: string;
  shadowSize?: number;
  strokeWidth?: number;
}

export const textShadow = (
  color: string,
  shadowSize?: number,
  strokeWidth?: number
): string => `
  -webkit-text-stroke: ${strokeWidth || 1}px ${color};
  text-shadow: 0px ${shadowSize || 2}px ${color};
`;
