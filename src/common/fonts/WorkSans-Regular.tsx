import fontFilettf from "./WorkSans-Regular.ttf";
import fontFilewoff from "./WorkSans-Regular.woff";
import fontFilewoff2 from "./WorkSans-Regular.woff2";

// eslint-disable-next-line import/prefer-default-export
export const workSansRegular = {
  fontFamily: "Work Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontDisplay: "swap",
  src: `
    url(${fontFilettf}) format('truetype'),
    url(${fontFilewoff}) format('woff'),
    url(${fontFilewoff2}) format('woff2')
  `,
};
