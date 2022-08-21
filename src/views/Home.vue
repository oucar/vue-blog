<template>
  <div class="home">
    <Hero/>
    <BlogPost/>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import BlogPost from '@/components/BlogPost.vue';
export default {
  name: "Home",
  components: {
    Hero,
    BlogPost,
    
  },
  data() {
    return {
      welcomeScreen: {
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
    }
  }
};
</script>
