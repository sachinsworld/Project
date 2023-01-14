<template>
  <div>
    <LoginNavBar />
    <div>
      <h1>All Certificates Issued</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Course</th>
          <th>Email</th>
          <th>Roll Number</th>
          <th>date</th>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item">
            <td>{{ item.cert._id }}</td>
            <td>{{ item.cert.name }}</td>
            <td>{{ item.cert.course }}</td>
            <td>{{ item.cert.email }}</td>
            <td>{{ item.cert.rollNo }}</td>
            <td>{{ item.cert.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LoginNavBar from "./LoginNavBar.vue";
import axios from "axios";
export default {
  name: "viewAllCert",
  components: {
    LoginNavBar,
  },
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get(
    "https://certify-verify.onrender.com/certs/"
      //  "https://evening-inlet-19531.herokuapp.com/certs/"
    );
    this.list = result.data.users;
  },
};
</script>

<style scoped>
h1 {
  color: rgb(255, 255, 255);
}
table {
  width: 100vw;
}
th,
td,
h1 {
  text-align: center;
}
thead,
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:nth-child(odd) {
  background-color: #ffffff;
}
@media only screen and (max-width: 800px) {
  th,td,h1 {
  padding: 6px;
}
table{
  font-size: 0.45em;
}
#n_deadspace{
  width:70vw;
}
h1{
  font-size: 0.7em;
}
}
@media only screen and (min-width: 801px) {
  th,td,h1 {
  padding: 12px;
}
table{
  font-size: 0.8em;
}
#n_deadspace{
  width:70vw;
}
}
</style>