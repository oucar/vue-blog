<template>
  <div class="hidden">
    <vs-navbar
      fixed
      shadow
      center-collapsed
      padding-scroll
      not-line
      v-model="active"
    >
      <!-- @TODO: Display name or sidebar icon -->
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu"></i>
        </vs-button>
        <router-link class="link" :to="{ name: 'Home' }">
          Onur Ucar
        </router-link>
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
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class="bx bx-home"></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class="bx bxs-music"></i>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-group"></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="Instagram">
          <template #icon>
            <i class="bx bxl-instagram"></i>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class="bx bxl-twitter"></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="Facebook">
          <template #icon>
            <i class="bx bxl-facebook"></i>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-code-alt"></i>
            </template>
            Coding
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
          <template #icon>
            <i class="bx bxl-github"></i>
          </template>
          Github
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          <template #icon>
            <i class="bx bxl-codepen"></i>
          </template>
          Codepen
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class="bx bxl-discord"></i>
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="Javascript">
          <template #icon>
            <i class="bx bxl-javascript"></i>
          </template>
          Javascript
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <template #icon>
            <i class="bx bxl-git"></i>
          </template>
          Git
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class="bx bxs-donate-heart"></i>
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class="bx bx-drink"></i>
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags"></i>
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
// import Login from "@/views/Login.vue";
// import Register from "@/views/Register.vue";
// import SmileIcon from "@/assets/Icons/smile.svg";
// import ProfileIcon from "@/assets/Icons/user.svg";
// import SignOutIcon from "@/assets/Icons/signOut.svg";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Navbar",
  components: {
    // Login,
    // Register,
    // SmileIcon,
    // ProfileIcon,
    // SignOutIcon,
  },
  data: () => ({
    active: "home",
    // active: 0,
    activeTooltip: false,
    activeSidebar: false,
  }),
  methods: {
    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },
  computed: {
    getUserDetails() {
      return [
        this.$store.state.profileFirstName,
        this.$store.state.profileInitials,
        this.$store.state.profileUsername,
        this.$store.state.profileEmail,
        this.$store.state.profileFirstName,
        this.$store.state.profileLastName,
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  cursor: pointer;
}

.profile-section {
  width: 300px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
  }
}
</style>
