export type Indent =
  | "none"
  | "xsmall"
  | "small"
  | "xmedium"
  | "medium"
  | "slarge"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "vlarge";

export interface IndentStylesProps {
  $top?: Indent;
  $left?: Indent;
}

export type FontSize =
  | "xsmall"
  | "small"
  | "default"
  | "subtitle"
  | "title"
  | "subheader"
  | "header";

export interface PaginationQueryParams {
  limit: number;
  offset: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;
