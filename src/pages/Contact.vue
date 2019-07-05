<template>
  <Layout>
    <div class="container">
    <ContactContent/>
    <ContactForm/>
    </div>
  </Layout>
</template>

<script>
import ContactForm from "@/components/Contact/ContactForm.vue";
import ContactContent from "@/components/Contact/ContactContent.vue";

export default {
  components:{
    ContactForm,
    ContactContent
  }
}
</script>

<style>

</style>

