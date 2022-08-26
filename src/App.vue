<template>
  <div class="app-wrapper">
    <div class="app">
      <Navbar/>
      <router-view />
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "app",
  components: {
    Navbar,
    Footer
},
  data() {
    return {};
  },
  created() {
    // true or false to check whether the user is logged in or not
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if(user){
        this.$store.dispatch("getCurrentUser");
      }
    });
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>
