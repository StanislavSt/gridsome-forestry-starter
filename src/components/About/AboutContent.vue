<template>
  <div class="about-container">
    <div class="grid-container" v-for="(item, id) in this.pageContent" :key="id">
      <div class="contact-header">
        <g-image :src="item.node.thumbnail" />
        <p class="info">
          <a>PHOTO</a>: 2018 Solo exhibition "Debut" : gallery "Bulgari"
        </p>
      </div>
      <div class="contact-header">
        <span class="content" v-html="item.node.content"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageContent: this.filtered()
    };
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    filtered() {
      return this.projects.filter(function(value) {
        return value.node.categories.includes("about");
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Karla&display=swap");
.content >>> * {
  text-align: justify;
  font-family: "Karla", sans-serif;
}
.content >>> p {
  font-size: 1.1rem;
}
.content >>> li {
  font-size: 1.1rem;
  margin: 0.5rem 0 0.5rem;
}
.content >>> h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 0;
}
a {
  color: black;
}
img {
  height: auto;
  width: auto;
}
.info {
  font-size: 0.8rem;
  word-spacing: 0.2rem;
  text-transform: uppercase;
  color: gray;
}
.about {
  float: right;
}
.contact-title {
  font-size: 3rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
span {
  margin-bottom: 1rem;
}
.grid-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-areas: ". .";
  grid-gap: 5%;
}

@media only screen and (max-width: 768px) {
  .grid-container {
    display: block;
  }
  .content >>> p {
    text-align: justify;
    font-size: 0.9rem;
  }
  .content >>> li {
    text-align: justify;
    font-size: 0.9rem;
    margin: 0.5rem 0 0.5rem;
  }
  .content >>> h2 {
    font-size: 1.3rem;
  }
}
</style>
