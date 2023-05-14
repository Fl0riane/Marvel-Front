import { useState } from "react";
import SignUpForm from "../components/SignUpForm";

const SignUp = ({ handleUserData }) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstname(value);
  };
  return (
    <SignUpForm
      firstname={firstname}
      setFirstname={setFirstname}
      username={username}
      password={password}
      email={email}
      setUsername={setUsername}
      setPassword={setPassword}
      setEmail={setEmail}
      handleEmailChange={handleEmailChange}
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
      handleFirstNameChange={handleFirstNameChange}
      handleUserData={handleUserData}
    />
  );
};
export default SignUp;
