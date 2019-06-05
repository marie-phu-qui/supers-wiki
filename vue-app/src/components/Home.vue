<template>
  <div id="homepage">

    <div id="form">
    <router-link to="/form">Ajoute un superhero</router-link>
    <router-view></router-view>
    <router-link to="/">Retour</router-link>
    </div>


    <h1> Supers Wiki home page </h1>

    <div v-for="universe in universes">

      <h2> {{universe.name}}</h2>

      <a :href="universe.name"><img class="universe-img" :src=universe.image ></a>

      <h3>Heroes List</h3>
      <div class="super-list" v-for="heros in universe.super_list">
        
        <h4> {{heros.superhero}} </h4>
        <p>Connu à l'état civil sous le nom de {{heros.alter_ego}}. {{heros.superhero}} a fait sa première apparition dans l'univers {{heros.publisher}} pour la première fois dans {{heros.first_appearance}}. Ses alias sont {{heros.characters}}.</p>
      </div>

    </div>

  </div>
</template>

<script>
import SuperForm from './SuperForm.vue'
import DCData from '../data/dc.json'
import MarvelData from '../data/marvel.json'
import MarvelImg from '../data/img/MARVEL.jpg'
import DCImg from '../data/img/DC.jpg'


console.log(DCData, MarvelData) 

export default {
  name: 'Home',
  data() { 
    return {
      universes : {
        marvel : {
          name : 'MARVEL',
          image: MarvelImg,
          super_list: MarvelData
        },
        DC : {
          name: 'DC',
          image: DCImg,
          super_list: DCData
        }
      },
      chosen_universe: 'none'
  }},
  methods: {
    select_universe(e) {
      this.universe = e.target.key;
    }
  },
  components: {
    SuperForm
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

  