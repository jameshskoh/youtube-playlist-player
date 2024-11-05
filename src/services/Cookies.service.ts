import Cookies from "js-cookie";

const BEARER_TOKEN_KEY = "bearer_token";

export const getBearerToken = (): string | undefined => {
  return Cookies.get(BEARER_TOKEN_KEY);
};

export const saveBearerToken = (bearerToken: string) => {
  Cookies.set(BEARER_TOKEN_KEY, bearerToken, {
    expires: 1,
    sameSite: "strict",
  });
};

export const deleteBearerToken = () => {
  Cookies.remove(BEARER_TOKEN_KEY);
};
