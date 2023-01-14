<template>
<div class="page">
<NavBar/>
  <div class="admin">
    <div class="login">
      <input type="text" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />
      <button v-on:click="login()">LogIn</button>
    </div>

    <p>
      <!-- <router-link to="/sign-Up">SignUp</router-link> -->
    </p>
  </div>
</div>
</template>

<script>
import NavBar from "./NavBar.vue"
import axios from "axios";
export default {
  name: "LoginPage",
  components:{
    NavBar
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.post(
        `https://certify-verify.onrender.com/`,{email:this.email,password:this.password}
      );
      if (result.status == 200) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name:'AddCert' });
      }
    },
  },
};
</script>

<style>
.admin{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
}
.login{
  width: 20vw;
  margin:10%;
}
@media only screen and (max-width: 668px) {
  .login{
    width: 60vw;
  }
}
</style>
