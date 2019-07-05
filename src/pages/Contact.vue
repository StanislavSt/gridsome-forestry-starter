<template>
  <Layout>
    <div class="container">
    <img 
                        src="../../static/Thea_About.jpg"
                    />
      <div class="contact-header">
        <p>
          +
          <a href="http://www.instagram.com"> INSTAGRAM </a>
        </p>
        <p>
          EMAIL: 
          <a class="social"> 
            EMAIL@GMAIL.COM
          </a>
          OR FILL IN THE FORM BELOW.
        </p>
      </div>

      <form class="contact-form" name="contact">

        <div class="sender-info">
          <div>
            <label for="name" class="label">YOUR NAME *</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">YOUR EMAIL *</label>
            <input type="email" name="email" />
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">MESSAGE *</label>
          <textarea name="message"></textarea>
        </div>

        <button class="button">SEND</button>

      </form>

    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
*{
    font-family: 'Karla', sans-serif;
}
p{
  font-size: .9rem;
  color:gray
}
a{
  margin: 0.3rem;
  color:black
}
a.social{
  margin: 0.9rem;
}
img{
  height: 55%;
  width: 55%;
}
.contact-header {
  padding: 3rem 0 2rem 0;
}
.contact-title {
  font-size: 3rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 1rem;
  padding: 0.5rem 1.1rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.115em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
@media only screen and (max-width: 768px) {
  img{
  height: 100%;
  width: 100%;
  }
}
</style>

