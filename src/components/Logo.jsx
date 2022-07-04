import logo from "./assets/logo.svg";
import SVG from "react-inlinesvg";

const Logo = () => {
  return (
    <SVG
      baseURL="/"
      cacheRequests={true}
      description="The Netflix logo"
      loader={<span>Loading...</span>}
      fill="#e50914"
      src={logo}
      height="100%"
      title="Netflix"
      uniqueHash="a1f8d1"
      uniquifyIDs={true}
    />
  );
};

export default Logo;
