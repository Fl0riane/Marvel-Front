import logo from "../../assets/img/logoMarvel.png";
import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = (research, setResearch) => {
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

        <Link>
          <p>FAVORIS</p>
        </Link>
      </div>
      <div className="research">
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          name="header input"
          placeholder="Recherche des articles"
          value={research}
          onChange={(event) => {
            setResearch(event.target.value);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
