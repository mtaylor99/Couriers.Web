import fontFilettf from "./WorkSans-Thin.ttf";
import fontFilewoff from "./WorkSans-Thin.woff";
import fontFilewoff2 from "./WorkSans-Thin.woff2";

// eslint-disable-next-line import/prefer-default-export
export const workSansThin = {
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 200,
  fontDisplay: "swap",
  src: `
    url(${fontFilettf}) format('truetype'),
    url(${fontFilewoff}) format('woff'),
    url(${fontFilewoff2}) format('woff2')
  `,
};
