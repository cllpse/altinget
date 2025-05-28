import { LOCAL_STORAGE_TOKEN_KEY } from "@/constants"

export const UserService = {
  authorize: (token: string) => {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
  },

  deAuthorize: () => {
    window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
  }
}
