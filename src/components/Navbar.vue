<template>
  <div class="center navbar">
    <vs-navbar
      fixed
      center-collapsed
      shadow
      padding-scroll
      not-line
      v-model="active"
    >
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
        <vs-tooltip bottom shadow not-hover v-model="activeTooltip">
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
              <vs-button @click="activeTooltip = false" flat dark block>
                Profile
                <template #animate>
                  <ProfileIcon />
                </template>
              </vs-button>
              <vs-button @click="activeTooltip = false" flat dark block>
                Admin
                <template #animate>
                  <KeyIcon />
                </template>
              </vs-button>
              <vs-button @click="activeTooltip = false" flat dark block>
                Sign Out
                <template #animate>
                  <SignOutIcon />
                </template>
              </vs-button>
            </div>
          </template>
        </vs-tooltip>

        <Login v-if="getUserDetails[0] === null"></Login>
        <Register v-if="getUserDetails[0] === null"></Register>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import SmileIcon from "@/assets/Icons/smile.svg";
import ProfileIcon from "@/assets/Icons/user.svg";
import KeyIcon from "@/assets/Icons/key.svg";
import SignOutIcon from "@/assets/Icons/signOut.svg";
export default {
  name: "Navbar",
  components: {
    Login,
    Register,
    SmileIcon,
    ProfileIcon,
    KeyIcon,
    SignOutIcon,
  },
  data: () => ({
    active: 0,
    activeTooltip: false,
  }),
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
