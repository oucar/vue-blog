import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Projects from "@/views/Projects.vue";
import Experiences from "@/views/Experiences.vue";
import Contact from "@/views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      title: 'Blog'
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: 'Projects'
    }
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: Experiences,
    meta: {
      title: 'Experiences'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Onur Ucar`;
  next();
})

export default router;
