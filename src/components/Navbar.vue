  <template>
    <div class="center examplex">
      <vs-navbar fixed center-collapsed v-model="active">
        <template #left>
          <img src="/logo2.png" alt="">
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
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
    </div>
  </template>
<script>
export default {
  data: () => ({
    active: 0
  })
};
</script>
