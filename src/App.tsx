import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeWrapper from "./pages/home/HomeWrapper.tsx";
import Login from "./pages/Login.tsx";
import Logout from "./pages/Logout.tsx";
import { getBearerToken } from "./services/Cookies.service.ts";

const App = () => {
  const bearerToken = getBearerToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<HomeWrapper bearerToken={bearerToken} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<div>Catch all!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
