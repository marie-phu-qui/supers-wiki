Vue.component('home', {
  template: `
  <div id="homepage">
    <div v-for="key in universe" class="universe">
    <!-- on click display chosen universe name - will redirect to page -->
    <button :id="key.name" v-on:click="displayUniverse">{{key.name}}</button>
    <h1>You are in {{chosen_universe}}</h1>
    <a :href="universe"></a><img class="universe-img" :src="key.image">
    </div>
  </div>
  `,
  data() { 
    return {
      universe : {
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
  methods : {
    displayUniverse : function(e) {
      this.chosen_universe = e.target.id
      this.$emit('display-universe', e.target.id)
    },
  }
})

Vue.component('supers-list', {
  props: {
    universe:{
      type: String,
      required: true
    }
  },
  template: `
  <div class="supers-list">
    <!-- will be displaying img of superheros google img search https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CSE_ID&q={{superhero}}&searchType=image&fileType=jpg&imgSize=small&alt=json -->
    <!-- src= google api.link v-for="super in data" -->
    <p>Universe is : {{universe}}</p>
    <img src="">
    <a :href="superhero"><ul >{{superhero}}</ul></a>
    
    <h4>Missing your fav super? Add it here</h4>
    <super-form @superhero-added="addSuper"></super-form>
  </div>
  `,
  data() { 
    return {
      superhero: 'SUPER',
  }},
  methods : {
    addSuper(newSuper){
      console.log("there there")
      this.data.push(newSuper)
    }
  }
  // computed : {
    
  // }
})


Vue.component('super-profile', {
  template: `
  <!-- last route with details per one heros-->
  <div class="super">
    <h1>{{superhero}}</h1>
    <p>
        {{description}}
    </p>
  </div>
  `,
  data() { 
    return {
      superhero: 'SUPER',
      publisher: '1',
      alter_ego: '2',
      first_appearance: '3',
      characters:'4',
  }},
  // methods : {
    
  // //   },
  computed : {
    description() {
      return this.superhero + ' ' + this.publisher + ' ' + this.alter_ego + ' ' + this.first_appearance + ' ' + this.characters
    }
  }
})

Vue.component('super-form', {
  template: `
  <form class="super-form" @submit.prevent>
    <p>
      <label for="superhero">Superhero:</label>
      <input id="superhero" v-model="superhero" required>
    </p>
    <p>
      <label for="publisher">Publisher:</label>
      <input id="publisher" v-model="publisher">
    </p>
    <p>
      <label for="alter_ego">Alter ego:</label>
      <input id="alter_ego" v-model="alter_ego">
    </p>
    <p>
      <label for="first_appearance">First appearance:</label>
      <input id="first_appearance" v-model="first_appearance">
    </p>
    <p>
      <label for="characters">Chartacters:</label>
      <input id="characters" v-model="characters">
    </p>
    
    <p>
      <input type="submit" value="Submit">
    </p>
  </form>
  `,
  data() { 
    return {
      superhero: null,
      publisher: null,
      alter_ego: null,
      first_appearance: null,
      characters:null
  }},
  methods : {
    onSubmit() {
      let newSuper = {
        superhero : this.superhero,
        publisher: this.publisher,
        alter_ego: this.alter_ego,
        first_appearance: this.first_appearance,
        characters: this.characters,
        }
      this.$emit('superhero-added', newSuper)
      this.superhero = null,
      this.publisher = null,
      this.alter_ego = null,
      this.first_appearance = null,
      this.characters =null
    }
  }
})

var app = new Vue({
    el: '#app',
    data: {
      universe: 'DC'
    },
    methods : {
      updateUniverse(universe) {
        this.universe = universe
      }
   },
  })