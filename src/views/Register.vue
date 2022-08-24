<template>
  <div class="center">
    <vs-button gradient primary @click="active = !active">
      Register
    </vs-button>
    <vs-dialog overflow-hidden full-screen v-model="active">
      <template #header>
        <h4 class="not-margin">Welcome to <b>Vuesax</b></h4>
      </template>

      <div class="con-form">
        <!-- Email -->
        <vs-input v-model="input1" placeholder="Email">
          <template #icon>
            <UserIcon />
          </template>
        </vs-input>

        <!-- Username -->
        <vs-input v-model="input1" placeholder="Username">
          <template #icon>
            <UserCircleIcon />
          </template>
        </vs-input>

        <!-- Password -->
        <vs-input
          type="password"
          v-model="value"
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

        <!-- Name -->
        <vs-input v-model="input1" placeholder="Name">
          <template #icon>
            <CoolIcon />
          </template>
        </vs-input>

        <!-- Last name-->
        <vs-input v-model="input1" placeholder="Email">
          <template #icon>
            <SmileIcon />
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block>
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
import UserCircleIcon from "@/assets/Icons/userCircle.svg";
import CoolIcon from "@/assets/Icons/cool.svg";
import SmileIcon from "@/assets/Icons/smile.svg";
export default {
  name: "Register",
  components: {
    HideIcon,
    ShowIcon,
    UserIcon,
    UserCircleIcon,
    CoolIcon,
    SmileIcon,
  },
  data: () => ({
    active: false,
    input1: "",
    input2: "",
    checkbox1: false,
    value: "",
    hasVisiblePassword: false,
  }),
  computed: {
    getProgress() {
      let progress = 0;

      // at least one number
      if (/\d/.test(this.value)) progress += 25;

      // at least one capital letter
      if (/(.*[A-Z].*)/.test(this.value)) progress += 25;

      // at menons a lowercase
      if (/(.*[a-z].*)/.test(this.value)) progress += 25;

      // more than 5 digits
      if (this.value.length >= 6) progress += 25;

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
