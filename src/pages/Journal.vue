<template>
  <Layout>
    <div class="journal-container">
      <h1 class="journal-header">Exhibitions</h1>
    </div>
    <g-link
      :to="item.node.path"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="journal-post"
    >
      <div class="container journal">
        <g-image :src="item.node.thumbnail" :alt="item.node.title" class="journal-thumbnail" />
        <h2 class="journal-title">{{ item.node.title }}</h2>
        <p class="journal-excerpt">{{ item.node.excerpt }}</p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query Journal {
	posts: allJournalPost {
    edges {
      node {
        id
        path
        thumbnail
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style scoped>
.container.journal {
  max-width: 720px;
}
.journal-container {
  padding-bottom: 3rem;
  text-align: center;
}
.journal-thumbnail {
  height: 260px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.journal-header {
  font-size: 2rem;
  font-weight: 700;
}
.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s ease;
}
.journal-post > * {
  transition: transform 0.5s ease;
}
.journal-post:hover {
  background-color: var(--color-base-1);
}
.journal-post:hover > * {
  transform: translateX(4rem);
}
.journal-post h1,
.journal-post h2 {
  margin: 0;
  padding: 0;
}
.journal-title {
  font-size: 1rem;
  color: var(--color-contrast-1);
}
.journal-excerpt {
  color: var(--color-contrast-1);
}

@media (min-width: 560px) {
  .journal-post {
    padding: 3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding: 0rem 0;
  }
}
</style>
