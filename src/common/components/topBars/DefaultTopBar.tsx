import { Link } from "react-router-dom";
import TNHGLogo from "../../assets/img/logo.svg";
import { LinkButton } from "../buttons";
import {
  DefaultTopBarAppBar,
  DefaultTopBarIconWrapper,
  DefaultTopBarLinkWrapper,
} from "./styles";

const DefaultTopBar = () => {
  return (
    <DefaultTopBarAppBar position="sticky" elevation={0}>
      <DefaultTopBarIconWrapper>
        <Link to="/">
          <img src={TNHGLogo} alt="TNHG logo" />
        </Link>
      </DefaultTopBarIconWrapper>
      <DefaultTopBarLinkWrapper>
        <Link to="/">Dashboard</Link>
      </DefaultTopBarLinkWrapper>
      <DefaultTopBarLinkWrapper>
        <Link to="/jobs">Jobs</Link>
      </DefaultTopBarLinkWrapper>
      <DefaultTopBarLinkWrapper>
        <LinkButton href="need-help" target="_blank">
          Need Help?
        </LinkButton>
      </DefaultTopBarLinkWrapper>
    </DefaultTopBarAppBar>
  );
};

export default DefaultTopBar;
