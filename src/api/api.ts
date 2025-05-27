import type { paths, components } from "@/api/schema"
import createClient from "openapi-fetch"
import { auth } from "@/api/middleware/auth";
import { BASE_URL } from "./constants";

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


export type Article = components["schemas"]["Article"];

export const getArticles = async (): Promise<Article[] | undefined> => {
  const client = createClient<paths>({ baseUrl: BASE_URL })

  client.use(auth);

  const { data, error } = await client.GET("/api/Article")

  if (error) {
    throw error
  }

  return data
}
