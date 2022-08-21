<template>
  <div class="container blog-previews">
    <vs-card class="card" type="1" v-for="card in 3" :key="card">
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
      </template>
    </vs-card>
  </div>
</template>

<script>
import "boxicons";
export default {
  name: "BlogPost",
};
</script>

<style lang="scss">
.blog-previews {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  .card {
    img {
      width: 250px;
    }

    .comment-count {
      margin-left: 10px;
    }

  }
}

@media screen and (max-width: 1150px) {
  .blog-previews {
    flex-direction: column;
    align-items: center;

    .card {
      max-width: 1000px !important;

      & > div {
        max-width: 500px;
        width: 500px;
        margin-bottom: 40px;
      }

      img {
        width: 100%;
        max-width: 200px;
        height: auto;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .blog-previews {
    flex-direction: column;
    align-items: center;

    .card {
      max-width: 300px !important;

      & > div {
        max-width: 300px;
        width: 300px;
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        max-width: 150px;
        height: auto;
      }
    }
  }
}
</style>
