<template>
  <div class="container">
    <vs-avatar class="profile" history priamry>
      <template #text>
        {{ $store.state.profileInitials }}
      </template>
    </vs-avatar>
    <vs-input class="input" label-placeholder="Username" v-model="username" />
    <vs-input class="input" label-placeholder="Email" v-model="email" />
    <vs-input
      class="input"
      label-placeholder="First Name"
      v-model="firstName"
    />
    <vs-input class="input" label-placeholder="Last Name" v-model="lastName" />

    <vs-button class="button" gradient :active="active == 1" @click="active = 1">
      Save Changes
    </vs-button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    active: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  }),
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
