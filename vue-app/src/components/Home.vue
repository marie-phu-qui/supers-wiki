<template>
    <div id="homepage">
    <h1> Home page </h1>
    
    <img class="universe-img" alt="DC logo" v-bind:src="dc-img" onclick="render <Universe/>" >
    <img class="universe-img" alt="Marvel logo" v-bind:src="marvel-img" >
    <Universe />

    </div>
  </div>
</template>

<script>
import Universe from './Universe.vue'

export default {
  name: 'Home',
  props: ['title'],
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

  