<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title" v-html="$page.post.title" />
          <div class="project-info">
            <div class="categories-container">
              <!--<div class="categories">
                <span class="label">Categories</span>
                <span
                  class="category"
                  v-for="(category, index) in $page.post.categories"
                  :key="index"
                  v-text="category"
                />
              </div>-->
            </div>
            <!--<div class="year-container">
              <span class="label">Year</span>
              <div v-html="$page.post.date" />
            </div>-->
          </div>
        </div>
        <div v-html="$page.post.content" class="content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    date (format: "YYYY")
    content
    categories
    projectBgColor
    projectFgColor
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      bodyAttrs: {
        style: `background-color: ${
          this.$page.post.projectBgColor
            ? this.$page.post.projectBgColor
            : "var(--color-base)"
        }; color: ${
          this.$page.post.projectFgColor
            ? this.$page.post.projectFgColor
            : "var(--color-contrast)"
        }`
      }
    };
  }
};
</script>

<style scoped>
.project-header {
  padding: 0rem 0 1rem 0;
}
.project-title {
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ", ";
}
.category:last-of-type:after {
  content: "";
}
@media only screen and (max-width: 768px) {
  .project-title {
    font-size: 1.8rem;
  }
}
</style>
