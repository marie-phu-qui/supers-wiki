<template>
  <div id="homepage">
    <h1> Home page </h1>

    <div v-for:"universe in universes" v-bind:key="universe">
       <a>{{universe.name}}</a>

    
      <img class="universe-img" alt="universe logo" src="universe.image"  >
      <Universe data="universe.super_list"/>
    </div>

  </div>
</template>

<script>
import Universe from './Universe.vue'

export default {
  name: 'Home',
  props: ['universe'],
  data() { 
    return {
      universes : {
        marvel : {
          name : 'MARVEL',
          image: '../data/img/MARVEL.jpg',
          super_list: '../data/marvel.json'
        },
        DC : {
          name: 'DC',
          image: '../data/img/DC.jpg',
          super_list: '../data/dc.json'
        }
      },
      chosen_universe: 'none'
  }},
  components: {
    Universe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.universe-img{
    width: 50%
}
</style>

  