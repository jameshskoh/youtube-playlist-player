import LoadingIndicator from "../components/loading/LoadingIndicator.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props: { deleteBearerTokenHandler: () => void }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const delayedRedirectFn = async () => {
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    };

    delayedRedirectFn();
  }, [navigate]);

  props.deleteBearerTokenHandler();
  return (
    <div className="block">
      <div className="my-8 mt-[15vh] flex items-center justify-center">
        <div>
          <h3 className="text-lg font-bold">You are logged out!</h3>
        </div>
      </div>
      <div className="my-4">
        <LoadingIndicator message="Redirecting you to login in a moment ..." />
      </div>
    </div>
  );
};

export default Logout;
