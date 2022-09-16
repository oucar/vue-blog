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
        <vs-button
          v-show="isMobileResolution"
          @click="activeSidebar = !activeSidebar"
          class="menu-button"
          flat
          icon
        >
          <MenuIcon />
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
        <Login v-if="getUserDetails[0] === null"></Login>
        <Register v-if="getUserDetails[0] === null"></Register>

        <vs-tooltip v-else bottom shadow not-hover v-model="activeTooltip">
          <vs-avatar class="profile" @click="activeTooltip = !activeTooltip">
            <template #text>
              {{ getUserDetails[1] }}
            </template>
          </vs-avatar>

          <template #tooltip>
            <div class="content-tooltip">
              <div class="profile-section">
                <!-- @TODO: Scroll through different emojis each ... second -->
                <SmileIcon />
                <div>
                  <p>{{ getUserDetails[4] }} {{ getUserDetails[5] }}</p>
                  <p>{{ getUserDetails[3] }}</p>
                </div>
              </div>

              <router-link :to="{ name: 'Profile' }">
                <vs-button @click="activeTooltip = false" flat dark block>
                  Profile
                  <template #animate>
                    <ProfileIcon />
                  </template>
                </vs-button>
              </router-link>

              <vs-button @click="signOut" flat dark block>
                Sign Out
                <template #animate>
                  <SignOutIcon />
                </template>
              </vs-button>
            </div>
          </template>
        </vs-tooltip>
      </template>
    </vs-navbar>

    <vs-sidebar fixed v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <!-- Logo will go here -->
        <router-link class="link" :to="{ name: 'Home' }">
          Onur Ucar
        </router-link>
      </template>

      <vs-sidebar-item id="projects">
        <router-link class="link" :to="{ name: 'Projects' }">
          Projects
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="experiences">
        <router-link class="link" :to="{ name: 'Experiences' }">
          Experiences
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="blog">
        <router-link class="link" :to="{ name: 'Blog' }">
          Blog
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="contact">
        <router-link class="link" :to="{ name: 'Contact' }">
          Contact
        </router-link>
      </vs-sidebar-item>

      <template #footer>
        <vs-row justify="center">
          <a class="link" href="https://github.com/oucar " target="_blank">
            <GithubIcon />
          </a>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import SmileIcon from "@/assets/Icons/smile.svg";
import ProfileIcon from "@/assets/Icons/user.svg";
import SignOutIcon from "@/assets/Icons/signOut.svg";
import MenuIcon from "@/assets/Icons/menu.svg";
import GithubIcon from "@/assets/Icons/github.svg";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Navbar",
  components: {
    Login,
    Register,
    SmileIcon,
    ProfileIcon,
    SignOutIcon,
    MenuIcon,
    GithubIcon,
  },
  data: () => ({
    active: "home",
    activeTooltip: false,
    activeSidebar: false,
    windowWidth: window.innerWidth,
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
    isMobileResolution() {
      if (this.windowWidth < 644) return true;
      else return false;
    },
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  cursor: pointer;
}

.menu-button {
  margin-right: 15px;
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
