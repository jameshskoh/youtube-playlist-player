import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeWrapper from "./pages/home/HomeWrapper.tsx";
import Login from "./pages/Login.tsx";
import Logout from "./pages/Logout.tsx";
import useLocalStorage from "use-local-storage";

const BEARER_TOKEN_KEY = "bearer_token";

const App = () => {
  const [bearerToken, setBearerToken] = useLocalStorage<string | null>(
    BEARER_TOKEN_KEY,
    null,
  );

  const setBearerTokenHandler = (token: string) => {
    setBearerToken(token);
  };

  const deleteBearerTokenHandler = () => {
    setBearerToken(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<HomeWrapper bearerToken={bearerToken} />}
        />
        <Route
          path="/login"
          element={
            <Login
              bearerToken={bearerToken}
              setBearerTokenHandler={setBearerTokenHandler}
            />
          }
        />
        <Route
          path="/logout"
          element={
            <Logout deleteBearerTokenHandler={deleteBearerTokenHandler} />
          }
        />
        <Route path="/*" element={<div>Catch all!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
