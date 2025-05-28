
import createClient from "openapi-fetch"
import type { components, paths } from "./schemas/schema";
import { auth } from "./_middleware/auth";
import { BASE_URL } from "@/constants";

export type Article = components["schemas"]["Article"];

export const getAll = async (): Promise<Article[] | undefined> => {
  const client = createClient<paths>({ baseUrl: BASE_URL })

  client.use(auth);

  const { data, error } = await client.GET("/api/Article")

  if (error) {
    throw error
  }

  return data
}
