<template>
  <div class="page">
    <LoginNavBar />
    <div class="cert">
      <div id="ftr"><NavFeature /></div>
      <div class="form">
        <div>
          <input type="text" placeholder="Student Name" v-model="name" />
        </div>
        <div><input type="text" placeholder="Course" v-model="course" /></div>
        <div><input type="text" placeholder="Email" v-model="email" /></div>
        <div><input type="text" placeholder="Roll No" v-model="rollNo" /></div>
        <div><button v-on:click="updateCert()">Update</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginNavBar from "./LoginNavBar.vue";
import NavFeature from "./NavFeature.vue";
import axios from "axios";
export default {
  name: "UpdateCert",
  components: {
    LoginNavBar,
    NavFeature,
  },
  data() {
    return {
      name: "",
      course: "",
      email: "",
      rollNo: "",
    };
  },
  methods: {
    async updateCert() {
      console.warn(this.rollNo);
      let result = await axios.patch(
        `http://localhost:4000/certs/${this.rollNo}`,
        {
          name: this.name,
          course: this.course,
          email: this.email,
          rollNo: this.rollNo,
        }
      );
      console.warn(result);
      if (result.status == 200) {
        alert("Certificate Update");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ name: "AddCert" });
    },
  },
};
</script>
<style scoped>
.cert {
  display: flex;
  height: 90vh;
}
#ftr {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0.8;
}
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
button{
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;
}
@media only screen and (max-width: 668px) {
  .cert{
    flex-direction: column;
  }
}
</style>