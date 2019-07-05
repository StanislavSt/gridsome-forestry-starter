<template>
<ClientOnly>
  <div class="container-carousel">
    <carousel :per-page="1" :mouse-drag="false" :autoplay="true" 
    :centerMode="true" :autoplayTimeout="3000">
      <slide class="example-slide">
        <div class="bottom-right">2018 Solo exhibition "Debut", gallery "Bulgari", Sofia, Bulgaria</div>
        <img 
            src="../../../static/Thea_About.jpg"
        />
      </slide>
      <slide class="example-slide">
        <img 
            src="../../../static/Thea_Contact.jpg"
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
.example-slide
{
  height:30rem;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
  color:white;
}
.container-carousel{
  padding-bottom: 3rem;
}
@media only screen and (max-width: 768px) {
  .example-slide
  {
    height: 15rem;
  }
}

</style>