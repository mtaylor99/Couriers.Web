import fontFilewoff from "./WorkSans-Bold.woff";
import fontFilewoff2 from "./WorkSans-Bold.woff2";
import fontFilettf from "./WorkSans-Bold.ttf";

// eslint-disable-next-line import/prefer-default-export
export const workSansBold = {
  fontFamily: "Work Sans",
  fontStyle: "bold",
  fontWeight: 700,
  fontDisplay: "swap",
  src: `
    url(${fontFilettf}) format('truetype'),
    url(${fontFilewoff}) format('woff'),
    url(${fontFilewoff2}) format('woff2')
  `,
};
