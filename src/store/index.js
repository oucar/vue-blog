import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "@/firebase/firebaseInit";

Vue.use(Vuex)

// TODO: CREATE MODULES LATER
export default new Vuex.Store({
  state: {
    // user related
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
    isAdmin: false,
    // blog related
    blogHTML: "Blog Title",
    blogTitle: null,
    blogPhotoName: null,
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
      state.isAdmin = doc.data().isAdmin;
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload){
      state.profileFirstName = payload;
    },
    changeLastName(state, payload){
      state.profileLastName = payload;
    },
    changeUsername(state, payload){
      state.profileUsername = payload;
    },
    // blog related
    newBlogPost(state, payload){
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload){
      state.blogTitle = payload;
    },
    fileNameChange(state, payload){
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload){
      state.blogPhotoFileURL = payload; 
    }
  },
  actions: {
    async getCurrentUser({
      commit
    }) {
      const database = await db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbResults = await database.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },
    async updateUserSettings({
      commit, state
    }){
      const database = await db.collection('users').doc(state.profileId);
      await database .update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    }
  },
  modules: {}
})