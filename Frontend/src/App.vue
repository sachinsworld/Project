<template>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
*{
  margin:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(43, 174, 91, 0.714);
  color: #2c3e50;
}
button {
  background-color:rgb(0, 0, 0);
  width: 100%;
  color: rgb(0, 0, 0);
  padding: 8px;
  margin: 10px 0px;
  border-radius: 15px;
  font-size: 1em;
  color: white;
  font-weight: bold;
}
.navbar,
#btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  padding: 25px;
}
input[type="text"],input[type="password"] {
  width: 100%;
  margin: 8px 0;
  padding: 12px 20px;
  border: 2px solid rgb(17, 17, 17);
  border-radius: 10px;
  box-sizing: border-box;
}
button:hover {
  background-color: rgb(0, 245, 131);
}
#fpwd {
  float: right;
  margin: 6px;
}
#signup {
  float: left;
  margin: 6px;
}
.login {
  margin-top: 6%;
  padding: 40px;
  background-color: rgb(235, 235, 235);
  border-radius: 20px;
}
a {
  color: rgb(255, 255, 255);
}
a:link {
  text-decoration: none;
}
a:hover,
span {
  color: rgb(0, 245, 131);
}
.page{
  height: 100vh;
}
</style>