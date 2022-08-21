  <template>
    <div class="center navbar">
      <vs-navbar fixed center-collapsed v-model="active">
        <template #left>
          <vs-navbar-item>Onur Ucar</vs-navbar-item>
        </template>
        <vs-navbar-item :active="active == 'projects'" id="projects">
          Projects
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'experiences'" id="experiences">
          Experiences
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'blog'" id="blog">
          Blog
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'contact'" id="contact">
          Contact
        </vs-navbar-item>
        <template #right>
          <!-- @TODO: Conditional Login / Register will go here -->
          <vs-button flat >Login</vs-button>
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
  })
};
</script>

<style scoped>



</style>
