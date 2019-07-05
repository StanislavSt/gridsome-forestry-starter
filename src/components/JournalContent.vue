<template>
  <div class="journal-container">
    <div class="journal-content" v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: String
  }
};
</script>

<style scoped>
.journal-container {
  padding-top: 6rem;
}
p {
  line-height: 1.5;
  font-size: 1.15rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4,
h5,
h6 {
  font-size: 1.15rem;
}
</style>
