import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Projects from "@/views/Projects.vue";
import Experiences from "@/views/Experiences.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: Experiences,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
