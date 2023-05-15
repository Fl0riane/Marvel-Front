import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = ({
  handleUserData,
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
}) => {
  const navigate = useNavigate();
  const [errorMessage, setErrormessage] = useState("");
  return (
    <div className="form">
      <nav>
        {" "}
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </Link>
      </nav>

      <h2>Se connecter</h2>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await axios.post(
              "https://site--back-end-marvel--p2d7k4xwpzzq.code.run/user/login",
              {
                email: email,
                password: password,
              }
            );
            if (response.data) {
              handleUserData({
                token: response.data.token,
                userId: response.data._id,
              });
              navigate("/");
            }
          } catch (error) {
            console.log(error.message);

            if (error.response.status === 401) {
              setErrormessage("Accès non autorisé");
            }
          }
        }}
      >
        <div>
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleEmailChange}
          />
          <input
            placeholder="Mot de passe"
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />

          <button type="submit">Se connecter</button>
          <p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </p>
          <Link to="/user/signup">
            <p>Pas encore de compte ? Inscris-toi !</p>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
