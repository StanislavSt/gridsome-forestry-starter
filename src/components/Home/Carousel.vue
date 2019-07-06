<template>
  <ClientOnly>
    <div class="container-carousel">
      <carousel
        :per-page="1"
        :mouse-drag="false"
        :autoplay="true"
        :centerMode="true"
        :autoplayTimeout="3000"
        :paginationSize="8"
      >
        <slide class="example-slide">
          <div class="bottom-right">2018 Solo exhibition "Debut", gallery "Bulgari", Sofia, Bulgaria</div>
          <img
            style="
            min-height: 100%;
            min-width: 100%;"
            src="../../../static/Thea_Carousel/Carousel5.jpg"
          />
        </slide>
        <slide class="example-slide">
          <img
            style="
            min-height: 100%;
            min-width: 100%;"
            src="../../../static/Thea_Carousel/Carousel4.jpg"
          />
        </slide>
        <slide class="example-slide">
          <img
            style="
            transform: translate(0,-250px);
            min-height: 120%;
            min-width: 100%;"
            src="../../../static/Thea_Carousel/Carousel2.jpg"
          />
        </slide>
        <slide class="example-slide">
          <img
            style="
            min-height: 100%;
            min-width: 100%;"
            src="../../../static/Thea_Carousel/Carousel1.jpg"
          />
        </slide>
        <slide class="example-slide">
          <img
            style="
            min-height: 100%;
            min-width: 100%;"
            src="../../../static/Thea_Carousel/Carousel3.jpg"
          />
        </slide>
        <slide class="example-slide">
          <img
            style="
            min-height: 100%;
            min-width: 100%;"
            src="../../../static/Thea_About.jpg"
          />
        </slide>
        <slide class="example-slide">
          <img
            style="
            min-height: 100%;
            min-width: 100%;"
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
    return {};
  },
  components: {
    Carousel: () =>
      import("vue-carousel")
        .then(m => m.Carousel)
        .catch(),
    Slide: () =>
      import("vue-carousel")
        .then(m => m.Slide)
        .catch()
  }
};
</script>

<style scoped>
.example-slide {
  height: 30rem;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
  color: white;
}
.container-carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 3rem 0;
}
@media only screen and (max-width: 768px) {
  .example-slide {
    height: 15rem;
  }
  .container-carousel {
    padding: 0.5rem;
  }
}
</style>