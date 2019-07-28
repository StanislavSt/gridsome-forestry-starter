<template>
  <Layout>
    <div class="container">
      <Gallery :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost(perPage:50) {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
}
</page-query>

<script>
import Gallery from "@/components/Paintings/Gallery.vue";

export default {
  components: {
    Gallery
  }
};
</script>

<style>
</style>
