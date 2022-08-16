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
export default {
  name: "app",
  components: {
    Navbar,
    Footer
},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
