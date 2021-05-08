import { Fragment } from "react";
import {
  CopyrightWrapper,
  FooterLink,
  FooterLinkDivider,
  FooterLinkWrapper,
  FooterWrapper,
} from "./styles";

const Footer = () => {
  return (
    <FooterWrapper maxWidth="lg">
      <FooterLinkWrapper>
        {[
          {
            key: "t&c",
            onClick: () => {},
            text: "Terms and Conditions",
          },
          {
            key: "privacy",
            onClick: () => {},
            text: "Privacy",
          },
          {
            key: "cookies",
            onClick: () => {},
            text: "Cookies",
          },
        ].map((link, idx, array) =>
          idx < array.length - 1 ? (
            <Fragment key={link.key}>
              <FooterLink onClick={link.onClick}>{link.text}</FooterLink>
              <FooterLinkDivider>|</FooterLinkDivider>
            </Fragment>
          ) : (
            <FooterLink key={link.key} onClick={link.onClick}>
              {link.text}
            </FooterLink>
          )
        )}
      </FooterLinkWrapper>
      <CopyrightWrapper>
        &copy; Copyright 2021 | The New Home Group
      </CopyrightWrapper>
    </FooterWrapper>
  );
};

export default Footer;
