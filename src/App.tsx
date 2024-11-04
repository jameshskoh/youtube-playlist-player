import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomeWrapper from "./pages/home/HomeWrapper.tsx";
import Login from "./pages/Login.tsx";
import { TokenResponse } from "@react-oauth/google";

const App = () => {
  // might need to store somewhere else ...
  const [bearerToken, setBearerToken] = useState<string | null>(null);

  const tokenHandler = (tokenResponse: TokenResponse) => {
    setBearerToken(tokenResponse.access_token);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<HomeWrapper bearerToken={bearerToken} />}
        />
        <Route path="/login" element={<Login tokenHandler={tokenHandler} />} />
        <Route path="/*" element={<div>Catch all!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
