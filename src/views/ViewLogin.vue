<script setup lang="ts">
import { ref } from "vue"
import { login } from "@/api/api"
import { LOCAL_STORAGE_TOKEN_KEY } from "@/api/constants"

const username = ref("admin")
const password = ref("SuperSecret")

const onClick = async () => {
  try {
    const token = await login({
      username: username.value,
      password: password.value,
    })

    if (token) {
      window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <h1>Login</h1>

  <input type="text" v-model="username" />
  <input type="password" v-model="password" />

  <button @click="onClick">login</button>
</template>
