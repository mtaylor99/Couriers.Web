/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { Theme } from "@material-ui/core/styles/createTheme";

// SEE: https://material-ui.com/guides/typescript/#customization-of-theme
declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    // Add custom properties to the theme here
    // ...
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {}
}
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    structure: Palette["primary"];
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    structure: PaletteOptions["primary"];
    tertiary: PaletteOptions["primary"];
  }
}
