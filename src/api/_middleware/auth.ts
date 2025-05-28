import { type Middleware } from "openapi-fetch";
import { LOCAL_STORAGE_TOKEN_KEY } from "@/constants";
import { login, type LoginToken } from "../Users";

let token: LoginToken = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || undefined

export const auth: Middleware = {
  async onRequest({ request }) {
    if (!token) {
      token = await login({ username: "", password: "" })

      if (token) {
        window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
      }
    }

    request.headers.set("Authorization", `Bearer ${token}`);

    return request;
  }
};
