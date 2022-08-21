<template>
  <div class="center navbar">
    <vs-navbar fixed center-collapsed v-model="active">
      <template #left>
        <vs-navbar-item>
          <router-link class="link" :to="{ name: 'Home' }">
            Onur Ucar
          </router-link>
        </vs-navbar-item>
      </template>
      <vs-navbar-item :active="active == 'projects'" id="projects">
        <router-link class="link" :to="{ name: 'Projects' }">
          Projects
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'experiences'" id="experiences">
        <router-link class="link" :to="{ name: 'Experiences' }">
          Experiences
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'blog'" id="blog">
        <router-link class="link" :to="{ name: 'Blog' }">
          Blog
        </router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'contact'" id="contact">
        <router-link class="link" :to="{ name: 'Contact' }">
          Contact
        </router-link>
      </vs-navbar-item>
      <template #right>
        <!-- @TODO: Conditional Login / Register will go here -->
        <vs-button flat>Login</vs-button>
        <vs-button>Register</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data: () => ({
    active: 0,
  }),
};
</script>

<style scoped></style>
