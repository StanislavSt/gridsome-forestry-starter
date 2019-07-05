<template>
  <div>
    <img src="../../../static/Thea_About.jpg" />
    <div class="contact-header">
      <p>
        +
        <a href="http://www.instagram.com">INSTAGRAM</a>
      </p>
      <p>
        EMAIL:
        <a class="social">EMAIL@GMAIL.COM</a>
        OR FILL IN THE FORM BELOW.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Karla&display=swap");
* {
  font-family: "Karla", sans-serif;
}
p {
  font-size: 0.9rem;
  color: gray;
}
a {
  margin: 0.3rem;
  color: black;
}
a.social {
  margin: 0.9rem;
}
img {
  height: 55%;
  width: 55%;
}

@media only screen and (max-width: 768px) {
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
