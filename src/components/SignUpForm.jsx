import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({
  setVisible,
  visible,
  firstname,
  username,
  email,
  password,
  handleEmailChange,
  handleNameChange,
  handlePasswordChange,
  handleFirstNameChange,
  handleUserData,
}) => {
  const [errorMessage, setErrormessage] = useState("");
  const navigate = useNavigate();

  return (
    <div
      className="form"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <nav>
        {" "}
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </Link>
      </nav>

      <h2>S'inscrire</h2>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setErrormessage("");
          try {
            const response = await axios.post(
              "https://site--back-end-marvel--p2d7k4xwpzzq.code.run/user/signup",
              {
                email: email,
                username: username,
                firstname: firstname,
                password: password,
                newsletter: true,
              }
            );
            console.log(response.data);
            if (response.data.token) {
              handleUserData(response.data.token);
              navigate("/");
            }
            console.log(response.data);
          } catch (error) {
            console.log(error.message);
            console.log(error.response.data);

            if (error.response.status === 409) {
              setErrormessage("Cette adresse email est déjà utilisée");
            } else if (error.response.data.message === "Missing parameters") {
              setErrormessage("Veuillez remplir tous les champs");
            }
          }
        }}
      >
        <div>
          {" "}
          <input
            placeholder="Prénom"
            type="text"
            name="firstName"
            onChange={handleFirstNameChange}
          />
          <input
            placeholder="Nom"
            type="text"
            name="userName"
            onChange={handleNameChange}
          />
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
          <button type="submit"> S'inscrire</button>
          <p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </p>
          <Link to="/user/login">
            <p>Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
