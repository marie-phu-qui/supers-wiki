
API documentation: CRUD

# Request and response formats

## POST /super-form/add/super-form/add
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

