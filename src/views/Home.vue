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
};
</script>
