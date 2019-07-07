<template>
  <div>
    <div class="journal-container">
      <h1 class="journal-header">Paintings</h1>
    </div>
    <div class="category">
      <a v-on:click="filter('canvas')" class="btn btn-dark">Canvas</a>
      <a v-on:click="filter('reproduction')" class="btn btn-dark">Reproduction</a>
      <a v-on:click="filter('print')" class="btn btn-dark">Print</a>
    </div>
    <div class="projects">
      <div class="project" v-for="item in filtered(this.category)" :key="item.node.id">
        <!-- Sold artworks-->
        <div
          class="sold"
          v-if="item.node.categories.includes('sold') 
          && ((category == 'all') || (category == 'canvas')) 
          && !item.node.categories.includes('reproduction')"
        >
          <div class="image-text">
            <g-link :to="item.node.path" class="project-link">
              <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail" />
              <div class="centered">SOLD</div>
            </g-link>
          </div>
        </div>
        <!-- Prints -->
        <div class="print" v-else-if="category =='print'">
          <g-link :to="item.node.path" class="project-link">
            <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail" />
          </g-link>
        </div>
        <!-- In stock artworks-->
        <div class="instock" v-else>
          <g-link :to="item.node.path" class="project-link">
            <g-image :src="item.node.thumbnail" :alt="item.node.title" class="thumbnail" />
          </g-link>
        </div>
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
  data: function() {
    return {
      category: "all"
    };
  },
  methods: {
    filtered(id) {
      return this.projects.filter(function(value) {
        if (id == "all") {
          return !value.node.categories.includes('page');
        } else {
          return value.node.categories.includes(id);
        }
      });
    },
    filter: function(tag) {
      this.category = tag;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Karla&display=swap");
/*------------------------------------------------------*/
/* BUTTONS */
/*------------------------------------------------------*/
.btn,
input[type="submit"] {
  cursor: pointer;
  border-radius: 0px;
  padding: 12px 18px;
  font-size: 12px;
  line-height: 19px;
  text-transform: uppercase;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.btn:hover,
input[type="submit"]:hover {
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.btn-dark,
input[type="submit"] {
  background: transparent;
  color: #1f1f1f;
  padding-right: 2rem;
  padding-left: 2rem;
}
.btn-dark:hover,
input[type="submit"]:hover,
.btn-dark.active {
  font-size: 13px;
  background: #e8e8e8;
}

.btn-color {
  background: transparent;
}
.btn-color:hover {
  color: #fff;
}

.category {
  text-align: center;
  max-width: 100%;
  padding: 0rem 0 3rem 0rem;
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
  height: 190px;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0, 0, 0, 0.25);
}
.project-title {
  font-size: 0.9rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem 0;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.category:last-of-type {
  margin: 0;
}
.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.25);
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}
.image-text {
  position: relative;
  text-align: center;
  color: white;
  opacity: 0.8;
}
.journal-container {
  padding-bottom: 3rem;
  text-align: center;
}
.journal-header {
  font-size: 2rem;
  font-weight: 700;
}
@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
  }
  .project:nth-child(3n + 1) {
    grid-column: auto;
  }
}
@media only screen and (max-width: 768px) {
  .category {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
