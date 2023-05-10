import logo from "../../assets/img/logoMarvel.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo Marvel" />
      <div>
        <Link to="/characters">
          <p>CHARACTERS</p>
        </Link>

        <Link to="/comics">
          <p>COMICS</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
