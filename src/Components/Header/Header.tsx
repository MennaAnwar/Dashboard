import { FC } from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

const Header: FC = () => {
  return (
    <div className="position-relative iq-banner">
      <Navbar />
      <Welcome />
    </div>
  );
};

export default Header;
