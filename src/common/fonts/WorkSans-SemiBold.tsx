import fontFilettf from "./WorkSans-SemiBold.ttf";
import fontFilewoff from "./WorkSans-SemiBold.woff";
import fontFilewoff2 from "./WorkSans-SemiBold.woff2";

// eslint-disable-next-line import/prefer-default-export
export const workSansSemiBold = {
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontDisplay: "swap",
  src: `
    url(${fontFilettf}) format('truetype'),
    url(${fontFilewoff}) format('woff'),
    url(${fontFilewoff2}) format('woff2')
  `,
};
