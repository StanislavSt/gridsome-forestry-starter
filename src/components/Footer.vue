<template>
  <footer class="footer">
    <div class="container">
      <span class="copyright" v-html="settings.footer" />
      
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      settings: require("../../data/theme.json")
    };
  }
};
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 4rem 0;
}
.container {
  border-top: groove;
  padding-top: 2rem;
}
.social {
  float: right;
  height: 2.6rem;
  position: relative;
  /* Adjust these values accordingly */
  bottom: 13px;
  left: 5px;
}
.social.mail{
  height: 1.7rem;
  bottom: 6px;
}
@media only screen and (max-width: 345px) {
  .copyright {
    font-size: 0.6rem;
  }
}
</style>
