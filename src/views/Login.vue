<template>
  <div class="center">
    <vs-button flat @click="active = !active">
      Login
    </vs-button>
    <vs-dialog v-model="active" :loading="isLoading">
      <template #header>
        <h4 class="not-margin">Welcome to <b>Onur's Blog</b></h4>
      </template>

      <div class="con-form">
        <vs-input v-model="email" placeholder="Email">
          <template #icon>
            <UserIcon />
          </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password">
          <template #icon>
            <LockAltIcon />
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="remember">Remember me</vs-checkbox>
          <!-- @TODO: Add validation to email, will be only visible if an email is entered -->
          <a @click.prevent="resetPassword" class="link">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click.prevent="signIn">
            Sign In
          </vs-button>

          <div class="new">New Here? <a href="#">Create New Account</a></div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import UserIcon from "@/assets/Icons/user.svg";
import LockAltIcon from "@/assets/Icons/lock-alt.svg";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Login",
  components: {
    UserIcon,
    LockAltIcon,
  },
  data: () => ({
    active: false,
    email: "",
    password: "",
    remember: false,
    forgotPassword: false,
    isLoading: false,
  }),
  methods: {
    async signIn() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.active = false;
          this.openNotification(
            "bottom-center",
            "success",
            "Welcome!",
            `It's really great to see you here, my friend.`
          );
        })
        .catch((err) => {
          this.openNotification(
            "bottom-center",
            "danger",
            "Oh...",
            `${err.message}`
          );
        });
      this.isLoading = false;
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
    async resetPassword() {
      this.isLoading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.openNotification(
            "bottom-center",
            "primary",
            "Sure thing!",
            "You will receive an e-mail in a few minutes with the instructions on how to reset your password. Don't forget to check your spam folder."
          );
          this.loading = false;
        })
        .catch((err) => {
          this.openNotification(
            "bottom-center",
            "danger",
            "Oh...",
            `${err.message}`
          );
          this.isLoading = false;
        });
    },
  },
};
</script>
<style lang="scss">
.link {
  cursor: pointer;
}
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
