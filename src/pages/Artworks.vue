<template>
  <Layout>
    <div class="container">
      <Gallery :projects="$page.projects.edges" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "D. MMMM YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Gallery from "@/components/Gallery"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Gallery,
    LatestJournals
  }
}
</script>

<style>
.gallery-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-2);
}
.gallery-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
</style>
