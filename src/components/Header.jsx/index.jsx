import logo from "../../assets/img/logoMarvel.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ token, handleUserData, setVisible, visible }) => {
  return (
    <header>
      <img src={logo} alt="logo Marvel" />
      <div>
        <Link to="/characters">
          <h2>CHARACTERS</h2>
        </Link>

        <Link to="/comics">
          <h2>COMICS</h2>
        </Link>

        <Link to="/favorites">
          <h2>FAVORIS</h2>
        </Link>
        {token ? (
          <Link to="/">
            <div>
              <button
                className="login"
                onClick={() => {
                  handleUserData(null, null);
                }}
              >
                DECONNEXION
              </button>
            </div>
          </Link>
        ) : (
          <div>
            <button
              className="login"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <p>CONNEXION</p>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
