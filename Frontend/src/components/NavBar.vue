<template>
  <div id="navbar">
    <div id="n_deadspace"></div>
    <div>
      <img
        id="logo"
        src="https://assets.website-files.com/603683469df97967298e6e81/6037ed523cde7f1958341705_logo.png"
        alt="image"
      />
    </div>
    <div id="n_logo">

    </div>
    <div id="n_deadspace"></div>
    <div id="n_deadspace"></div>
    <div id="n_deadspace"></div>
    <div id="sec">
      <div class="sec">
        <router-link to="/" action="_blank">Verify a Certificate</router-link>
      </div>
      <div class="sec">
        <router-link to="/admin">Tutor's Corner</router-link>
      </div>
      <div class="sec"><router-link to="/contact">Contact Us</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
 
};
</script>

<style scoped>
#navbar {
  display: flex;
  background: rgb(0, 1, 1);
  color: rgb(255, 255, 255);
  height: 60px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

#n_logo,
#sec {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0.5;
}

#logo {
  display: flex;
  flex-grow: 0.2;
  justify-content: center;
  align-items: center;
  height: 58px;
}
.sec {
  flex-grow: 0.5;
  font-size: 0.8em;
  font-weight: bold;
}

#n_deadspace {
  width: 0.3vw;
}
</style>
