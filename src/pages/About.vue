<template>
  <layout>
    <div class="container">
      <AboutContent :projects="$page.projects.edges" />
    </div>
  </layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        categories
        thumbnail (quality: 90)
        content
      }
    }
  },
}
</page-query>

<script>
import AboutContent from "@/components/About/AboutContent.vue";
export default {
  components: {
    AboutContent
  }
};
</script>

<style>
</style>

