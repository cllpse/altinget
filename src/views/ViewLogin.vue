<script setup lang="ts">
import { ref } from "vue"
import { UserService } from "@/services/UserService"
import { login } from "@/api/Users"

const username = ref("admin")
const password = ref("SuperSecret")

const onClick = async () => {
  try {
    const token = await login({
      username: username.value,
      password: password.value,
    })

    if (token) {
      UserService.authorize(token)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section>
    <h1>Login</h1>

    <fieldset>
      <legend>Enter your credentials to log in</legend>

      <label for="username">Username</label>
      <br />
      <input id="username" type="text" v-model="username" />

      <br />
      <br />

      <label for="password">Password</label>
      <br />
      <input id="password" type="password" v-model="password" />

      <br />
      <br />

      <button @click="onClick">login</button>
    </fieldset>
  </section>
</template>
