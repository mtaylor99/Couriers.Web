import fontFilettf from "./WorkSans-Light.ttf";
import fontFilewoff from "./WorkSans-Light.woff";
import fontFilewoff2 from "./WorkSans-Light.woff2";

// eslint-disable-next-line import/prefer-default-export
export const workSansLight = {
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 300,
  fontDisplay: "swap",
  src: `
    url(${fontFilettf}) format('truetype'),
    url(${fontFilewoff}) format('woff'),
    url(${fontFilewoff2}) format('woff2')
  `,
};
