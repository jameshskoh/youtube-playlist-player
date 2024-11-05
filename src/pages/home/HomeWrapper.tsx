import { Navigate } from "react-router-dom";
import Home from "./Home.tsx";

const HomeWrapper = (props: { bearerToken: string | undefined }) => {
  if (props.bearerToken === undefined) {
    return <Navigate to="/login" />;
  }

  return <Home bearerToken={props.bearerToken} />;
};

export default HomeWrapper;
