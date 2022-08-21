<template>
  <div class="container hero">
    <div class="introduction">
      <h1>Hi, I'm Onur!</h1>
      <p>Software engineer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo incidunt voluptatum minima modi fugit ut dicta placeat, provident vero omnis harum nobis aliquid dolorem, inventore nisi, cum sint voluptates unde.</p>
    </div>
    <img src="../assets/avatars/pixel.png" alt="">
   
  
  </div>
</template>

<script>
export default {
    name: 'Hero',
}
</script>

<style lang="scss" scoped>

.hero {

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 1.75;
  margin-top: 40px;
  margin-bottom: 60px;
  

  img {
    width: 300px;
  }

}

@media screen and (max-width: 600px) {
    .hero {
        img {
            display: none;
        }
    }
}



</style>