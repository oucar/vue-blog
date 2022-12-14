import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import Vuesax from "vuesax";
import firebase from "firebase/app";
import "firebase/auth";

import '/src/styles/main.scss';
import 'vuesax/dist/vuesax.css';
import 'boxicons/css/boxicons.min.css'


Vue.use(Vuesax);
Vue.use(Vue2Editor);

let app;
firebase.auth().onAuthStateChanged(() => {
  // app is not initialized
  if (!app) {
    Vue.config.productionTip = false;
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");

  }
})