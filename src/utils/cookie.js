import Cookies from 'js-cookie';
import { COOKIE_NAME } from "constants";
import { API_TOKEN } from "constants";

export const setCookieIfNotExists = () => {
  const existingCookie = Cookies.get(COOKIE_NAME);

  if (!existingCookie) {
    Cookies.set(COOKIE_NAME, API_TOKEN);
  } else {
    console.log("Cookie already exists:", COOKIE_NAME);
  }
};
