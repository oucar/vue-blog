<template>
  <div class="container">
    <vs-avatar class="profile" history priamry>
      <template #text>
        {{ $store.state.profileInitials }}
      </template>
    </vs-avatar>
    <!-- USERNAME -->
    <vs-input class="input" label="Username" v-model="username">
      <template v-if="v$.username.$invalid" #message-danger>
        Invalid username
      </template>
    </vs-input>
    <!-- FIRST NAME -->
    <vs-input class="input" label="First Name" v-model="firstName">
      <template v-if="v$.firstName.$invalid" #message-danger>
        Invalid first name
      </template>
    </vs-input>
    <!-- LAST NAME -->
    <vs-input class="input" label="Last Name" v-model="lastName">
      <template v-if="v$.lastName.$invalid" #message-danger>
        Invalid last name
      </template>
    </vs-input>

    <vs-tooltip bottom>
      <vs-input class="input" label="Email" disabled v-model="email" />
      <template #tooltip>
        Contact admin if you need to change your email.
      </template>
    </vs-tooltip>

    <vs-button
      class="button"
      gradient
      :active="active == 1"
      :disabled="v$.username.$invalid || v$.firstName.$invalid || v$.lastName.$invalid"
      @click="saveChanges"
    >
      Save Changes
    </vs-button>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, maxLength, minLength } from "@vuelidate/validators";
export default {
  name: "Profile",
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    active: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  }),
  created() {
    this.username = this.$store.state.profileUsername;
    this.firstName = this.$store.state.profileFirstName;
    this.lastName = this.$store.state.profileLastName;
    this.email = this.$store.state.profileEmail;
  },
  validations() {
    return {
      username: { required, maxLength: maxLength(15), minLength: minLength(3) },
      firstName: { required, maxLength: maxLength(15), minLength: minLength(3) },
      lastName: { required, maxLength: maxLength(15), minLength: minLength(3) },
    };
  },
  methods: {
    openNotification(position = null, color, title, message) {
      const notification = this.$vs.notification({
        progress: "auto",
        color,
        position,
        title: title,
        text: message,
      });
      console.log(notification);
    },
    saveChanges() {
      if(!this.v$.username.$invalid && !this.v$.firstName.$invalid && !this.v$.lastName.$invalid) {
        this.active = 1;
        this.$store.commit("changeUsername", this.username);
        this.$store.commit("changeFirstName", this.firstName);
        this.$store.commit("changeLastName", this.lastName);
        this.$store.dispatch("updateUserSettings");
        this.openNotification(
          "bottom-center",
          "success",
          "Changes were saved succesfully!",
          `I hope you're happy now.`
        );
      } else {
        this.openNotification(
          "bottom-center",
          "danger",
          "Well, something went wrong!",
          `Did you mess with the developer tools maybe?? Not cool.`
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 70vh;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input {
    padding-top: 40px;
  }

  .button {
    margin-top: 40px;
    padding: 2px 10px;
  }
}
</style>
