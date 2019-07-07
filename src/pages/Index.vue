<template>
  <Layout>
    <Carousel />
    <div class="container">
      <HomeSubtitle />
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
import ProjectsGrid from "@/components/Home/ProjectsGrid.vue";
import LatestJournals from "@/components/Home/LatestJournals.vue";
import Carousel from "@/components/Home/Carousel.vue";
import HomeSubtitle from "@/components/Home/HomeSubtitle.vue";

export default {
  components: {
    ProjectsGrid,
    LatestJournals,
    Carousel,
    HomeSubtitle
  }
};
</script>

<style>
</style>