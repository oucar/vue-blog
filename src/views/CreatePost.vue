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
            <span v-if="this.$store.state.blogPhotoName"
              >File Chosen:
              {{ this.$store.state.blogPhotoName.slice(0, 15) }}...</span
            >
          </div>

          <input type="file" id="blog-photo" accept=".png, .jpg, .jpeg" />
          <!-- Preview -->
          <vs-button
            v-if="!this.$store.state.blogPhotoFileURL"
            primary
            gradient
            @click="active = !active"
            class="preview-button"
          >
            Preview Cover Photo
          </vs-button>

          <!-- Preview Content -->
          <vs-dialog width="550px" not-center v-model="active">
            <div class="con-content">
              <p>
                Vuesax is a relatively new framework with a refreshing design
                and in the latest trends, vuesax based on vuejs which means that
                we go hand in hand with one of the most popular javascript
                frameworks in the world and with a huge community with which you
                will have all the help and documentation to create and make your
                project
              </p>
            </div>
          </vs-dialog>
        </div>

        <!-- Editor -->
        <div class="editor">
          <vue-editor
            :editorOptions="editorSettings"
            v-model="blogHTML"
            useCustomImageHandler
          />
        </div>

        <div class="blog-actions">
          <router-link class="router-button" to="#">
            <vs-button>Preview</vs-button>
          </router-link>
          <vs-button>Publish</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
  name: "CreatePost",
  data() {
    return {
      active: false,
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
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

.blog-actions{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
