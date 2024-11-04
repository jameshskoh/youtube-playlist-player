import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type LoginProps = {
  tokenHandler: (tokenResponse: TokenResponse) => void;
};

const Login = (props: LoginProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const loggedInHandler = (tokenResponse: TokenResponse) => {
    console.log(tokenResponse);
    props.tokenHandler(tokenResponse);
    navigate("/");
  };

  const errorMessageHandler = () => {
    setErrorMessage("Failed to login!");
  };

  const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/youtube.readonly",
    onSuccess: loggedInHandler,
    onError: errorMessageHandler,
  });

  return (
    <div>
      <button onClick={() => login()}>Login to Google!</button>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default Login;
