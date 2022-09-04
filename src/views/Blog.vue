<template>
  <div class="container">
    <div class="blogs">
      <h1>Blog</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quo,
        assumenda dicta a, eligendi esse unde asperiores aspernatur error, fuga
        ratione. Deserunt inventore corporis voluptates dolorem, doloribus modi!
        Esse, nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
        dolorem magni non accusamus nisi eum tempora mollitia dolores odio est,
        cum recusandae unde voluptatum ea reprehenderit reiciendis eos. In,
        ipsa!
      </p>

      <div class="search">
        <div class="input-fields">
          <vs-input
            label-placeholder="Author"
            primary
            v-model="author"
            type="search"
          >
            <template #icon> <box-icon name="user"></box-icon> </template
          ></vs-input>

          <vs-input
            label-placeholder="Article Name"
            primary
            v-model="articleName"
            type="search"
          >
            <template #icon> <box-icon name="book"></box-icon> </template
          ></vs-input>
        </div>

        <!-- @TODO: All of my blogs will start displaying an animation -->
        <vs-checkbox v-if="isAdmin" v-model="editMode">
          Toggle Edit/Delete Mode
        </vs-checkbox>

        <router-link v-if="isAdmin"  lass="link" :to="{ name: 'CreatePost' }">
          <vs-button class="button" icon gradient animation-type="vertical">
            Create a new blog
            <template #animate>
              <PencilIcon />
            </template>
          </vs-button>
      </router-link>
      </div>

      <div class="blog-previews">
        <vs-card class="card" type="1" v-for="card in 12" :key="card">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="../assets/logo.png" alt="" />
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>

          <template #interactions>
            <vs-button danger icon>
              <box-icon name="heart" color="white"></box-icon>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <box-icon name="chat"></box-icon>
              <span class="comment-count">31</span>
            </vs-button>

            <div class="my-blogs">
              <vs-button warn icon>
                <box-icon name="edit-alt" color="white"></box-icon>
              </vs-button>
              <vs-button danger icon>
                <box-icon name="trash" color="white"></box-icon>
              </vs-button>
            </div>
          </template>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
import PencilIcon from "@/assets/Icons/pencil.svg";
export default {
  name: "Blog",
  data() {
    return {
      author: "",
      articleName: "",
      editMode: false,
    };
  },
  components: {
    PencilIcon,
  },
  computed: {
    isAdmin() {
      return this.$store.state.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  line-height: 1.75;
  .blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 40px;
  }
  .blog-previews {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    .my-blogs {
      display: flex;
      flex-direction: row;
      position: relative;
    }
  }
  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;
  }
  .input-fields {
    display: flex;
    width: 450px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .button {
    margin-top: 20px;
    font-size: 13px;
    padding: 3px 20px;
  }
}

@media screen and (max-width: 600px) {
  .search {
    margin: 20px;
  }
  .input-fields {
    display: flex;
    flex-direction: column !important;
    width: 100% !important;
    height: 100px;
  }
}
</style>
