<template>
<div class="page">
  <LoginNavBar/>
  <div class=cert>
    <div id="ftr"><NavFeature /></div>
    <div class="form">
      <div><input type="text" placeholder="Student Name" v-model="name" required></div>
      <div><input type="text" placeholder="Course" v-model="course" required></div>
      <div><input type="text" placeholder="Email" v-model="email" required></div>
      <div><input type="text" placeholder="Roll No" v-model="rollNo" required></div>
      <div><button v-on:click="signup()">Add</button></div>
    </div>   
  </div>
</div>
</template>
<script scoped>
import LoginNavBar from './LoginNavBar.vue'
import NavFeature from './NavFeature.vue'
import axios from "axios";
export default {
    name:'AddCert',
    components:{
        LoginNavBar,
        NavFeature
    },
    data() {
    return {
      name: "",
      course: "",
      email: "",
      rollNo:"",
    };
  },
  methods: {
    async signup() {
      let result = await axios.post("https://certify-verify.onrender.com/certs/", {
        name: this.name,
        course: this.course,
        email: this.email,
        rollNo:this.rollNo
      });
      console.warn(result);
      if (result.status == 201) {
        alert("Certificate Added");
      
      localStorage.setItem("user-info",JSON.stringify(result.data))
      localStorage.setItem("certId",result.data.cert._id)
      this.$router.push({name:'CertDownload'})
      }
      else{
        alert(result.data.message);
      }
    },
  },
  
};


</script>


<style scoped>
.cert{
    height: 90vh;
    display: flex;
}
#ftr{
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