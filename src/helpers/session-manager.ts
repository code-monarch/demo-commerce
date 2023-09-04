import Cookies from "js-cookie";
import { COOKIE_TOKEN } from "../constants";

/**
 * @description sets Token cookie
 * @param value: Session token
 */
const setTokenCookie = (value: string) => {
  return Cookies.set(COOKIE_TOKEN, value);
};

/**
 * @description gets access Token cookie
 */
const getTokenCookie = () => {
  return Cookies.get(COOKIE_TOKEN);
};

export { setTokenCookie, getTokenCookie };
