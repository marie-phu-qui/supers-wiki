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




var app = new Vue({
    el: '#app',
    data : {
    //   universe : {
    //     marvel : {
    //       name : 'MARVEL',
    //       image: '../data/img/MARVEL.jpg',
    //       super_list: '../data/marvel.json'
    //     },
    //     DC : {
    //       name: 'DC',
    //       image: '../data/img/DC.jpg',
    //       super_list: '../data/dc.json'
    //     }
    //   },
      link:'https://www.dccomics.com/',
      superhero: 'SUPER',
      publisher: '1',
      alter_ego: '2',
      first_appearance: '3',
      characters:'4',
    },
    methods : {
      displayUniverse : function(e) {
        this.chosen_universe = e.target.id
      },
    },
    computed : {
      description() {
        return this.superhero + ' ' + this.publisher + ' ' + this.alter_ego + ' ' + this.first_appearance + ' ' + this.characters
      }
    }
    // render: h => h(App)
  })