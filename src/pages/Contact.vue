<template>
  <Layout>
    <div class="container">
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" id="name"/>
        <input type="email" name="email" id="email"/>
        <textarea name="message" id="message"></textarea>
      </form>
      <ContactContent />
      <ContactForm />
    </div>
  </Layout>
</template>

<script>
import ContactForm from "@/components/Contact/ContactForm.vue";
import ContactContent from "@/components/Contact/ContactContent.vue";

export default {
  components: {
    ContactForm,
    ContactContent
  }
};
</script>

<style>
</style>

