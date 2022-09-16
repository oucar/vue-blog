<template>
  <div class="center">
    <vs-button gradient primary @click="active = !active">
      Register
    </vs-button>
    <vs-dialog
      overflow-hidden
      full-screen
      :loading="isLoading"
      v-model="active"
    >
      <template #header>
        <h4 class="not-margin">Welcome to <b>@oucar's personal website.</b></h4>
      </template>

      <div class="con-form">
        <!-- Username -->
        <vs-input v-model="username" placeholder="Username">
          <template v-if="v$.username.$invalid" #message-danger>
            Invalid username
          </template>
          <template #icon>
            <UserIcon />
          </template>
        </vs-input>

        <!-- Email -->
        <vs-input v-model="email" placeholder="Email">
          <template v-if="v$.email.$invalid" #message-danger>
            Invalid email
          </template>
          <template #icon>
            <EmailIcon />
          </template>
        </vs-input>

        <!-- Password -->
        <vs-input
          type="password"
          v-model="password"
          placeholder="Password"
          :progress="getProgress"
          :visiblePassword="hasVisiblePassword"
          icon-after
          @click-icon="hasVisiblePassword = !hasVisiblePassword"
        >
          <template #icon>
            <ShowIcon v-if="!hasVisiblePassword" />
            <HideIcon v-else />
          </template>

          <template v-if="getProgress >= 100" #message-success>
            Secure password
          </template>
          <template v-else #message-primary>
            Your password must be more than 6 digits, include a lower and upper
            letter, and a number.
          </template>
        </vs-input>

        <!-- First Name -->
        <vs-input v-model="firstName" placeholder="First Name">
          <template v-if="v$.firstName.$invalid" #message-danger>
            Invalid first name
          </template>
          <template #icon>
            <CoolIcon />
          </template>
        </vs-input>

        <!-- Last name-->
        <vs-input v-model="lastName" placeholder="Last Name">
          <template v-if="v$.lastName.$invalid" #message-danger>
            Invalid last name
          </template>
          <template #icon>
            <SmileIcon />
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button
            block
            @click.prevent="register"
            :disabled="
              v$.username.$invalid ||
                v$.email.$invalid ||
                v$.firstName.$invalid ||
                v$.lastName.$invalid ||
                getProgress !== 100
            "
          >
            Register
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import ShowIcon from "@/assets/Icons/show.svg";
import HideIcon from "@/assets/Icons/hide.svg";
import UserIcon from "@/assets/Icons/user.svg";
import EmailIcon from "@/assets/Icons/email.svg";
import CoolIcon from "@/assets/Icons/cool.svg";
import SmileIcon from "@/assets/Icons/smile.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "@/firebase/firebaseInit";
import useVuelidate from "@vuelidate/core";
import { required, maxLength, minLength, email} from "@vuelidate/validators";
export default {
  name: "Register",
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    HideIcon,
    ShowIcon,
    UserIcon,
    EmailIcon,
    CoolIcon,
    SmileIcon,
  },
  data: () => ({
    active: false,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
    hasVisiblePassword: false,
    isLoading: false,
  }),
  validations() {
    return {
      username: { required, maxLength: maxLength(15), minLength: minLength(3) },
      email: { required, email, maxLength: maxLength(30), minLength: minLength(3) },
      firstName: {
        required,
        maxLength: maxLength(15),
        minLength: minLength(3),
      },
      lastName: { required, maxLength: maxLength(15), minLength: minLength(3) },
    };
  },
  methods: {
    async register() {
      if (
        !this.v$.username.$invalid &&
        !this.v$.firstName.$invalid &&
        !this.v$.lastName.$invalid &&
        !this.v$.email.$invalid &&
        !this.getProgress !== 100
      ) {
        this.isLoading = true;
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        // can get the created user id
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          username: this.username,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          isAdmin: this.isAdmin,
        });
        this.active = false;
        this.openNotification(
          "bottom-center",
          "success",
          "Yes!!",
          "You have succesfully registered!"
        );
        this.isLoading = false;
        this.resetFields();
        return;
      }
      this.openNotification(
        "bottom-center",
        "danger",
        "Oh no...",
        "Please make sure you filled all the fields!!"
      );
    },
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
    resetFields() {
      this.email = this.password = this.username = this.firstName = this.lastName =
        "";
    },
  },
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number
      if (/\d/.test(this.password)) progress += 25;

      // at least one capital letter
      if (/(.*[A-Z].*)/.test(this.password)) progress += 25;

      // at menons a lowercase
      if (/(.*[a-z].*)/.test(this.password)) progress += 25;

      // more than 5 digits
      if (this.password.length >= 6) progress += 25;

      return progress;
    },
  },
};
</script>
<style lang="scss">
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 0.8rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
  .vs-checkbox-label {
    font-size: 0.8rem;
  }
  .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);
    .vs-input {
      width: 100%;
    }
  }
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
    a {
      color: rgba(var(--vs-primary), 1) !important;
      margin-left: 6px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .vs-button {
    margin: 0px;
  }
}
</style>
