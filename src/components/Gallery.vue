<template>
  <div>
    <div class="category">
    <button v-on:click="filter('all')">All</button>
    <button v-on:click="filter('reproduction')">Reproduction</button>
    <button v-on:click="filter('canvas')">Canvas</button>
    </div>
    <div class="projects">
        <div class="project" v-for="item in filtered(this.category)" :key="item.node.id">
            <g-link :to="item.node.path" class="project-link">
            <g-image
                :src="item.node.thumbnail"
                :alt="item.node.title"
                class="thumbnail"
            />
            <h3 class="project-title">{{ item.node.title }}</h3>
            <div class="categories">
                <span class="category" v-for="(item, index) in item.node.categories" :key="index">{{ item }}</span>
            </div>
            </g-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
    data: function(){
      return {
        category: 'reproduction'
        }
    },
    /*computed:{
      filteredProjects(){
        return this.projects.filter(function(value){
            return value.node.categories == 'reproduction'
        })
      }
    },*/
    methods: {
       filtered(id){
        return this.projects.filter(function(value){
          if(id == 'all')
          {
            return value;
          }
          else{
            return value.node.categories == id
          }
        })
      },
      filter: function(tag) {
      this.category = tag;
    }
  }
}
</script>

<style scoped>
.category {
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    padding-bottom: 4rem;
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 4rem;
}
.project {
  grid-column: auto / span 2;
  text-align: center;
}
.project-link {
  text-decoration: none;
}
.thumbnail {
  height: 160px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category {
  margin-right: 0.8rem;
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.25);
}

@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
  }
  .project:nth-child(3n+1) {
    grid-column: auto ;
  }
}

</style>
