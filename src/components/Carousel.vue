<template>
<ClientOnly>
  <div class="container-carousel">
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false" :autoplay="true">
      <slide class="example-slide">
        <img 
            src="../../static/Thea_About.jpg"
        />
      </slide>
      <slide class="example-slide">
        <img 
            src="../../static/Thea_Contact.jpg"
        />
      </slide>
    </carousel>
  </div>
</ClientOnly>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {
      Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
    },
}
</script>


<style scoped>
.hero {
    text-align: center;
    width: 1920px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
.example-slide
{
  height:30rem;
}

@media only screen and (max-width: 768px) {
  .example-slide
  {
    height: 15rem;
  }
}

</style>