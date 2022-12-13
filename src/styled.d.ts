import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    mainColor: string;
    textColor: string;
    accentColor: string;
    fontWeight: number;
    defaultFontSize: number;
  }
}
