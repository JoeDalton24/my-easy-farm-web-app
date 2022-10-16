import { DefaultTheme } from "styled-components";
import { colors, Color } from "./color";

export const theme: DefaultTheme = {
  colors: colors,
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Color;
  }
}
