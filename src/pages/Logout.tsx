import { deleteBearerToken } from "../services/Cookies.service.ts";

const Logout = () => {
  deleteBearerToken();

  return <>You are logged out!</>;
};

export default Logout;
