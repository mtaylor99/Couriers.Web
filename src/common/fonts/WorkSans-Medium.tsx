import fontFilettf from "./WorkSans-Medium.ttf";
import fontFilewoff from "./WorkSans-Medium.woff";
import fontFilewoff2 from "./WorkSans-Medium.woff2";

// eslint-disable-next-line import/prefer-default-export
export const workSansMedium = {
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 500,
  fontDisplay: "swap",
  src: `
    url(${fontFilettf}) format('truetype'),
    url(${fontFilewoff}) format('woff'),
    url(${fontFilewoff2}) format('woff2')
  `,
};
