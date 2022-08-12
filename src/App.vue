<template>
  <div class="app-wrapper">
    <div class="app">
      <Navbar/>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: "app",
  components: {
    Navbar,
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
