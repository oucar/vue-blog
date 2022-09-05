<template>
  <div class="create-post">
    <div class="blog-info">
      <!-- Blog Title -->
      <vs-input
        dark
        v-model="blogTitle"
        label="Blog Title"
        placeholder="Why is Vue.js better than React.js?"
      />

      <!-- Upload File -->
      <div class="upload-file">
        <div class="buttons">
          <div class="upload-and-preview-name">
            <vs-button flat class="upload-button">
              <label for="blog-photo" class="custom-file-upload"
                >Upload Cover Photo</label
              >
            </vs-button>
            <span v-if="blogPhotoName"
              >File Chosen: {{ blogPhotoName.slice(0, 15) }}...</span
            >
          </div>

          <input
            type="file"
            id="blog-photo"
            accept=".png, .jpg, .jpeg"
            @change="fileChange"
            ref="blogPhoto"
          />
          <!-- Preview -->
          <vs-button
            primary
            gradient
            @click="active = !active"
            class="preview-button"
            :disabled="previewButton"
          >
            Preview Cover Photo
          </vs-button>

          <!-- Preview Content -->
          <vs-dialog width="550px" not-center v-model="active">
            <div class="con-content">
              <img :src="blogCoverPhoto" alt="" style="width: 300px;" />
            </div>
          </vs-dialog>
        </div>

        <!-- Editor -->
        <div class="editor">
          <vue-editor
            :editorOptions="editorSettings"
            v-model="blogHTML"
            useCustomImageHandler
            @image-added="imageHandler"
          />
        </div>

        <div class="blog-actions">
          <router-link class="router-button" :to="{name: 'BlogPreview'}">
            <vs-button class="blog-action-button">Preview</vs-button>
          </router-link>
          <vs-button class="blog-action-button">Publish</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
  name: "CreatePost",
  data() {
    return {
      active: false,
      previewButton: true,
      file: null,
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    blogPhotoName() {
      return this.$store.state.blogPhotoName;
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogHTML: {
      get() {
        return this.$store.state.blogHTML;
      },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      },
    },
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
      this.previewButton = false;
    },
    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const storageRef = firebase.storage().ref();
      const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}`);
      docRef.put(file).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const downloadURL = await docRef.getDownloadURL();
          Editor.insertEmbed(cursorLocation, "image", downloadURL);
          resetUploader();
        }
      );
    },
    // uploadBlog() {
    //   if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
    //     if (this.file) {
    //       this.loading = true;
    //       const storageRef = firebase.storage().ref();
    //       const docRef = storageRef.child(
    //         `documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`
    //       );
    //       docRef.put(this.file).on(
    //         "state_changed",
    //         (snapshot) => {
    //           console.log(snapshot);
    //         },
    //         (err) => {
    //           console.log(err);
    //           this.loading = false;
    //         },
    //         async () => {
    //           const downloadURL = await docRef.getDownloadURL();
    //           const timestamp = await Date.now();
    //           const dataBase = await db.collection("blogPosts").doc();
    //           await dataBase.set({
    //             blogID: dataBase.id,
    //             blogHTML: this.blogHTML,
    //             blogCoverPhoto: downloadURL,
    //             blogCoverPhotoName: this.blogCoverPhotoName,
    //             blogTitle: this.blogTitle,
    //             profileId: this.profileId,
    //             date: timestamp,
    //           });
    //           await this.$store.dispatch("getPost");
    //           this.loading = false;
    //           this.$router.push({
    //             name: "ViewBlog",
    //             params: { blogid: dataBase.id },
    //           });
    //         }
    //       );
    //       return;
    //     }
    //     this.error = true;
    //     this.errorMsg = "Please ensure you uploaded a cover photo!";
    //     setTimeout(() => {
    //       this.error = false;
    //     }, 5000);
    //     return;
    //   }
    //   this.error = true;
    //   this.errorMsg = "Please ensure Blog Title & Blog Post has been filled!";
    //   setTimeout(() => {
    //     this.error = false;
    //   }, 5000);
    //   return;
    // },
  },
};
</script>

<style lang="scss">
.create-post {
  padding-top: 90px;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 300px !important;
  margin-top: 4px;
}

.upload-file {
  font-size: 13px;

  label {
    padding-right: 10px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 5px 0;

    .upload-and-preview-name {
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        padding: 0px 20px;
      }
    }

    input[type="file"] {
      display: none;
    }
    .custom-file-upload {
      width: 100%;
      cursor: pointer;
      padding: 10px;
    }
    .upload-button {
      padding: 0;
      height: 35px;
      width: 200px;
    }
    .preview-button {
      height: 35px;
      width: 200px;
      position: relative;
      right: 4px;
    }
  }
}

.editor {
  height: 60vh;
  display: flex;
  flex-direction: column;
  .quillWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .ql-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
  }
  .ql-editor {
    padding: 20px 16px 30px;
  }
}

.blog-actions {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 7px;

  .blog-action-button {
    padding: 3px 10px;
    margin: 10px 0 0 25px;
  }
}

/* predef */
con-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .vs-button {
    margin: 0px;
    .vs-button__content {
      padding: 10px 30px;
    }
    & ~ .vs-button {
      margin-left: 10px;
    }
  }
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
  padding-bottom: 0px;
}
.con-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
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
      color: getColor("primary") !important;
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

@media screen and (max-width: 600px) {
  .create-post {
    padding-top: 120px;
  }
  input {
    width: 100% !important;
    margin-top: 4px;
  }
  .buttons {
    display: flex;
    flex-direction: column !important;

    .upload-and-preview-name {
      display: flex;
      flex-direction: column !important;
      align-items: center;
    }

    .upload-button {
      width: 100% !important;
    }

    .preview-button {
      width: 100% !important;
    }
  }
}
</style>
