<template>
  <Layout>
    <div class="container">
      <Carousel/>
      <div class="hero-subtitle">
        Latest Artworks
      </div>
      <ProjectsGrid :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
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
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"
import Carousel from "@/components/Carousel"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals,
    Carousel
  }
}
</script>

<style scoped>
.container{
  padding-top:0rem;
}
.hero-subtitle{
  text-align: center;
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.9;
    text-transform: uppercase;
}
</style>