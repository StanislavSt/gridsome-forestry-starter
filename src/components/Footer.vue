<template>
  <footer class="footer">
    <div class="container">
      <span class="copyright" v-html="settings.footer" />
      <g-link class="nav__link" :to="{ name: 'terms' }">Terms and Conditions</g-link>
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
.nav__link{
  font-size: 14px;
  float:right;
}
@media only screen and (max-width: 390px) {
  .copyright {
    font-size: 0.6rem;
  }
  .nav__link{
  padding-top:3px;
  font-size: 11px;
  float:right;
}
}
</style>
