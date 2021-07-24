/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { Mixins } from "@material-ui/core/styles/createMixins";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

// SEE: https://material-ui.com/guides/typescript/#customization-of-theme
declare module "@material-ui/core/styles/createMixins" {
  interface Mixins {
    // Add custom properties to the theme here
    // ...
    exampleMixin: CSSProperties;
    pagePadding: CSSProperties;
  }
  // allow configuration using `createTheme`
  interface MixinsOptions {
    exampleMixin: CSSProperties;
    pagePadding: CSSProperties;
  }
}
