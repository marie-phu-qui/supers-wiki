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
      console.log("click", e.target.id)
      this.chosen_universe = e.target.id
    },
  }
})

Vue.component('supers-list', {
  template: `
  <div class="supers-list">
    <!-- will be displaying img of superheros google img search https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CSE_ID&q={{superhero}}&searchType=image&fileType=jpg&imgSize=small&alt=json -->
    <!-- src= google api.link v-for="super in data" -->
    <img src="">
    <a :href="superhero"><ul >{{superhero}}</ul></a>
  </div>
  `,
  data() { 
    return {
      superhero: 'SUPER',
  }},
  // methods : {
    
  // //   },
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



var app = new Vue({
    el: '#app'
  })