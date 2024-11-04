import { Navigate } from "react-router-dom";
import Home from "./Home.tsx";

const HomeWrapper = (props: { bearerToken: string | null }) => {
  if (props.bearerToken === null) {
    return <Navigate to="/login" />;
  }

  return <Home bearerToken={props.bearerToken} />;
};

export default HomeWrapper;
