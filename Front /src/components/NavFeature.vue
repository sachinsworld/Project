<template>
  <div>
    <div class="feat"><router-link to="/AddCert">Add a certificate</router-link></div>
    <div class="feat">
      <router-link to="/remove">Delete a certificate</router-link>
    </div>
    <div class="feat">
      <router-link to="/update">Update a certificate</router-link>
    </div>
    <div class="feat">
      <router-link to="/viewAll">View issued certificates</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFeatures",
  components:{
  }
}
</script>

<style>
.feat{
  padding: 20px;
  border: solid 1px rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);
  border-radius: 10px;
  margin:2.5px;
  padding-left: 50px;
  padding-right: 50px;
  font-weight: bold;
}

</style>