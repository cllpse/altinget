
import createClient from "openapi-fetch"
import type { components, paths } from "./schemas/schema";
import { BASE_URL } from "@/constants";

export type LoginToken = string | undefined

export const login = async (p: components["schemas"]["LoginDTO"]): Promise<LoginToken> => {
  const client = createClient<paths>({ baseUrl: BASE_URL })

  const { data, error } = await client.POST("/api/Login", {
    body: {
      username: p.username,
      password: p.password,
    },
    parseAs: "text",
  })

  if (error) {
    throw error
  }

  return data
}
