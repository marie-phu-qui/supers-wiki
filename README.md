# Supers-wiki


A superheroes wiki using vue.js 2. This is a simple CRUD application using two databases marvel.json and dc.json.
MVP version built with @vue/cli will be under : [the vue-app folder](https://github.com/marie-phu-qui/supers-wiki/tree/master/vue-app)


## User Stories

### MVP

As a user:
- En tant qu'utilisateur je veux avoir accès à la liste des personnages de chaque camps afin de pouvoir voir l'ensemble des personnages : 
  * I want to access each universe characters list 
  * I want to view both universes all characters at the same time 
- En tant qu'utilisateur je veux avoir accès aux détails de chaque personnage afin d'en connaitre les détails d'apparition des personnages :
  * I want to access individual characters full description  
- En tant qu'utilisateur je veux pouvoir ajouter, modifier, ou supprimer un personnage afin de tenir les listes à jour 
  * I want to have a CRUD interface to create, read, update and delete my database entries

As a developper:
  * I will be using Vue.js 2 
  * I will be using multi components 
  * I will be using Vuetify 
  * I will be using Axios.js to access the databases
  * Routes will be using vue-router
  * I will be using vue i18n for translation purposes 


### Stretch
  * I want to display a first google image response per superheros as a thumbnail in Super-List ( using https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CSE_ID&q={{superhero}}&searchType=image&fileType=jpg&imgSize=small&alt=json)
  * I want to be using a many language option with i18m
  * I want to be using a smooth dymanic screen responsive UI (via Bootstrap)
  * I want to be using a all user friendly UX (all screens as mentionned before but also a all sights) 

  ---

## Vue Components
  | name | purpose |
  | --- | --- |
  | HOME | display a choice of Universe |
  | Super-List | display a list of Superheros in a chosen Universe |
  | Super-Thumbnail | display a name and picture per Superheros with a delete action |
  | Super-Profile | display a full desciption per Superheros |
  | Super-Form | display a form to add or modify Superheros |
  | Language | display a choice of language using vue i18n for translation |


## Databases 
  There should be two tables for MVP

### DC
  | Column Name | Data Type |
  | --- | --- |
  | superhero | String |
  | publisher | String |
  | alter_ego | String |
  | first_appearance | String |
  | characters | String |

### MARVEL
  | Column Name | Data Type |
  | --- | --- |
  | superhero | String |
  | publisher | String |
  | alter_ego | String |
  | first_appearance | String |
  | characters | String |

 ---

## Setup depedencies, load data, make the server running

Run the following commands in your terminal:

```sh
yarn install
yarn knex migrate:latest
yarn knex seed:run
mv .env_example .env
```

To run in development:
```sh
yarn dev
 - or -
npm run dev

```

To run in production:
```sh
yarn start
  - or -
npm start
```

# Deployment

I will define futher down the creation path if Heroku is the best plateform for VUEJS. Keeping it as a template right now as I am familiar with it. 

## Heroku for deployment !

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Deploying when MVP is reached !

npm scripts that will be useful for deploying your app to heroku easily. Will determined if VUEJS needs that extra setup when up.

To push your local master branch to your heroku app:
```sh
yarn h:deploy
  - or -
npm run h:deploy
```

Handle datasets :

Run heroku migrations:
```sh
yarn h:migrate
  - or -
npm run h:migrate
```

Run heroku seeds:
```sh
yarn h:seed
  - or -
npm run h:seed
```

If ever you need to rollback:
```sh
yarn h:rollback
  - or -
npm run h:rollback
```

### Ta-Da!
The app will be deployed!


## API docs: Request and response formats

## POST /super-form/add
### Request
```sh
    {
      "superhero":"Captain Marvel", 
      "publisher":"Marvel Comics", 
      "alter_ego":"Carol Danvers",
      "first_appearance":"Marvel Super-Heroes #12",
      "characters":"Carol Danvers"
    }
```

## UPDATE /super-form/update
### Request
```sh
    {
      "superhero":"Captain America", 
      "publisher":"Marvel Comics", 
      "alter_ego":"Steve Rogers",
      "first_appearance":"Captain America Comics #1",
      "characters":"Steve Rogers, the shield"
    }
```


## GET /supers-list
### Response:
<!-- A List of array of Supers Name -->
```sh
[
    {
        "superhero":"Flash", 
    },
...
    {
        "superhero":"Black Canary", 
    }
]
```

## DELETE /supers-list
### Response:
<!-- Remove targeted superfrom list -->
```sh
[
    {
        "superhero":"Black Canary", 
    }
]
```

## GET /super-profile
### Request:
<!-- An array of Supers full profile -->
```sh
{
    "superhero":"Green Lantern", 
    "publisher":"DC Comics", 
    "alter_ego":"Alan Scott",
    "first_appearance":"All-American Comics #16",
    "characters":"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
}
```

## To Do

* The vue-app folder has been created with cmds: 
```sh
vue create vue-app
```
or also working with (if having issues using having vue recognized which was my case) :
```sh
npx @vue/cli create vue-app
```
All that is up has been using the vue/cli template with server spinned on localhost.
The databases are now linking to the Home component. 


To reach MVP :
* I need to separate components to create multi components app. 
  *  At the moment I have \<Home /> and \<SuperForm/ >. I wish to divide \<Home /> into sub components such as \<Universe /> and \<SuperProfile />.
* I need to activate separate routes corresponding to indivial universe view.
* I need my form to post data to relevant databases.
* I need to add an update option.
* I need to add a delete option.
* I need to start testing the code as soon as possible.

To add some streches :
* I wish to spin up vue/i18n to make the app multilanguage.
* I wish to solve my current non rendering of universes image.
* I wish to use Google API to load superheros thumbnail picture.

Work in progress not v1.0 useable. Development stage. 
