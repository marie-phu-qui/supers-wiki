// Vue.component('home', {
//   template: `<!-- Home page on click will render list of super heros par Universe-->
//   <div>
//     <div class="universe">
//         <a :href="link"><h1>{{universe}}</h1></a>
//         <a :href="universe"></a><img class="universe-img" :src="image">
//     </div>

//     <!-- on click will render supers heros specific characteristics component-->
//     <div class="super-list">
//         <!-- will be displaying img of superheros google img search https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CSE_ID&q={{superhero}}&searchType=image&fileType=jpg&imgSize=small&alt=json -->
//         <!-- src= google api.link -->
//         <img src="">
//         <a :href="superhero"><li>{{superhero}}</li></a>
//     </div>
    
//     <!-- last route with details per one heros-->
//     <div class="super">
//       <h1>{{superhero}}</h1>
//       <p>
//           {{publisher}} 
//           {{alter_ego}}
//           {{first_appearance}}
//           {{characters}}
//       </p>
//     </div>
//   <div>`,
//   data() { return {
//     universe: 'DC',
//     image: '../data/img/DC.jpg',
//     link:'https://www.dccomics.com/',
//     superhero: 'SUPER',
//     publisher: 'super',
//     alter_ego: 'super',
//     first_appearance: 'super',
//     characters:'super'
//   }},
//   // methods : ,
//   computed: {
//     title() {
//       return this.superhero
//     }
//   }
// })




var app = new Vue({
    el: '#app',
    data : {
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
      link:'https://www.dccomics.com/',
      superhero: 'SUPER',
      publisher: 'super',
      alter_ego: 'super',
      first_appearance: 'super',
      characters:'super',
      chosen_universe: 'none',
    },
    methods : {
      displayUniverse : function(e) {
        console.log (e.target.id, this.chosen_universe)
        this.chosen_universe = e.target.id
      },
      defineID : function() {
        console.log(document.getElementsByTagName(button).innerHTML)
      }
    },
    computed : {
      title() {
        return this.superhero + ' ' + this.publisher
      }
    }
    // render: h => h(App)
  })