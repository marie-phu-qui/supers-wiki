Vue.Component('home', {
  template: `<!-- Home page on click will render list of super heros par Universe-->
  <div class="universe">
      <a :href="link"><h1>{{universe}}</h1></a>
      <a :href="universe"></a><img class="universe-img" :src="image">
  </div>

  <!-- on click will render supers heros specific characteristics component-->
  <div class="super-list">
      <!-- will be displaying img of superheros google img search https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CSE_ID&q={{superhero}}&searchType=image&fileType=jpg&imgSize=small&alt=json -->
      <!-- src= google api.link -->
      <img src="">
      <a :href="superhero"><li>{{superhero}}</li></a>
  </div>
  
  <!-- last route with details per one heros-->
  <h1>{{superhero}}</h1>
  <p>
      {{publisher}} 
      {{alter_ego}}
      {{first_appearance}}
      {{characters}}
  </p>`,
  data() { return {
    universe: 'DC',
    image: '../data/img/DC.jpg',
    link:'https://www.dccomics.com/',
    superhero: 'SUPER',
    publisher: 'super',
    alter_ego: 'super',
    first_appearance: 'super',
    characters:'super'
  }}
  // methods : ,
  // computed: 
})




var app = new Vue({
    el: '#app',
    // render: h => h(App)
  })