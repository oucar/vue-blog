<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.blogTitle }}</h2>
      <img :src="blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
  },
};
</script>

<style lang="scss">
.post-view {
  min-height: 100%;
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }
  .quillWrapper {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    img {
      max-height: 400px;
      max-width: 100%;
      margin: 0 auto;
    }
  }

  .post-content {
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .ql-editor {
    padding: 0;
  }
  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
    margin: 16px auto;
  }
  img {
    margin-bottom: 32px;
  }
}
</style>
