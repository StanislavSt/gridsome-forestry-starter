<template>
  <Layout>
    <div class="container">
      <Carousel/>
      <HomeSubtitle/>
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
import ProjectsGrid from "@/components/ProjectsGrid.vue"
import LatestJournals from "@/components/LatestJournals.vue"
import Carousel from "@/components/Carousel.vue"
import HomeSubtitle from "@/components/HomeSubtitle.vue"

export default {
  components: {
    ProjectsGrid,
    LatestJournals,
    Carousel,
    HomeSubtitle
  }
}
</script>

<style scoped>

</style>