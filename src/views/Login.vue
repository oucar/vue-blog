<template>
  <div class="center">
    <vs-button flat @click="active = !active">
      Login
    </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">Welcome to <b>Onur's Blog</b></h4>
      </template>

      <div class="con-form">
        <vs-input v-model="email" placeholder="Email">
          <template #icon>
            <box-icon name="user"></box-icon>
          </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password">
          <template #icon>
            <box-icon name="lock-alt"></box-icon>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="remember">Remember me</vs-checkbox>
          <!-- @TODO: Add validation to email, will be only visible if an email is entered -->
          <a @click="openNotification('bottom-center', 'primary')" class="link">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
            Sign In
          </vs-button>

          <div class="new">New Here? <a href="#">Create New Account</a></div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: () => ({
    active: false,
    email: "",
    password: "",
    remember: false,
    forgotPassword: false,
  }),
  methods: {
    forgotPasswordClicked() {
      if (this.forgotPassword === false) this.forgotPassword = true;
      else {
        setTimeout(() => {
          this.forgotPassword = !this.forgotPassword;
        }, 5000);
      }
    },
    openNotification(position = null, color) {
      const notification = this.$vs.notification({
        progress: "auto",
        color,
        position,
        title: "Well, I just sent an e-mail to you.",
        text: `Please check your email (${this.email}) and click on the provided link to reset your password!`,
      });
      console.log(notification);
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
