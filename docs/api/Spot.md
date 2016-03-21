# Spot

## Properties

| Name | Type | Default Value | Description
| --- | --- | --- | ---
| `type` | `String` | | Specify how to display this Spot. One of `photo`, `video`, `mixed` or `location`.
| `title` | `String` | | Title of the Spot.
| `caption` | `String` | | Description of the Spot.
| `photo` | `Photo.id` | | Reference to a Photo record.
| `url` | `String` | | Web URL of Spot that can be used to share on external services.
| `car` | `Car.id` | | Reference to `Car` record.
| `spotter` | `User.id` | | Reference to a `User` record. This usually gets populated on requests.
| `created` | `Date` | `Date.now` | When the record was created.
| `viewsCount` | `Number`| 0 | How many times the Spot has been viewed by a unique user.
| `likesCount` | `Number`| 0 | Amount of times the spot has been liked.
| `modified` | `Date` | | When the record was last updated.
| `likes` | `Likes.id` | | Reference to a `Likes` record.
| `location` | `{ lat, long, alt, acc, city, country }` | | Location object.

### Notes

Note: Need to figure out another solution of keeping track of the users that have liked the spot. Having a list of user ids is alright for now, but it will quickly become an issue when dealing with thousands of users.

One idea is to have the route `spot/:id/likes` which would return the user objects, just by querying separately. A new `Likes` model would need to be made.

I had the idea of each `Spot` having different kinds of media, sort of like a slideshow of photos and videos. The uploader would be able to choose the front/featured image and all others could be swiped through. This is low priority for now, a single image should be good.

Properties like `mediaCount`, `featured` etc. would need to be added.

## Retrieving a single Spot

```
GET spots/:id
```

### Response

```js
{
  "spot": {
    "_id": "56e9e2c9ab699690196e2a12",
    "likes": "56e9e2c9ab699690196e2a13",
    "type": "location",
    "title": "2016 Jaguar F-Type",
    "caption": "Spotted this sweet Jag while on my trip to Apple HQ.",
    "spotter": {
      "_id": "56e87f088bd4ccc2c70da40f",
      "followers": "56e87f088bd4ccc2c70da410",
      "name": "Rose Berry",
      "handle": "rosey",
      "location": "Toronto, Canada",
      "created": "2016-03-15T21:30:48.177Z",
      "spotsCount": 18,
      "followingCount": 0,
      "followersCount": 5,
      "likesCount": 3,
      "following": []
    },
    "location": {
      "country": "United States",
      "city": "Cupertino",
      "accuracy": 65,
      "altitude": 0,
      "longitude": -122.03046898,
      "latitude": 37.33240730999999
    },
    "created": "2016-03-16T22:48:41.451Z",
    "commentsCount": 0,
    "likesCount": 0,
    "viewsCount": 0
  }
}
```

## Creating a Spot

```
POST /api/spots
```

When a new `Spot` record is created, a `Likes` record also gets created. A relationship is then established by the two via ID reference.

If adding a `Location`, only the coordinates should be sent with the request. The `country` and `city` values automatically get resolved based on those values, using reverse geocoding.

### Request

```js
{
  "spot": {
    "title": "2017 Ford GT",
    "description": "Here's something to think about.",
    "spotter": "56e87eed8bd4ccc2c70da40d"
  }
}
```

### Response

```js
{
  "spot": {
    "likes": "56ef3c172e13cb7455b937e1",
    "title": "2017 Ford GT",
    "spotter": "56e87eed8bd4ccc2c70da40d",
    "_id": "56ef3c172e13cb7455b937e0",
    "location": {
      "country": "",
      "city": "",
      "accuracy": 0,
      "altitude": 0,
      "longitude": 0,
      "latitude": 0
    },
    "created": "2016-03-21T00:11:03.787Z",
    "commentsCount": 0,
    "likesCount": 0,
    "viewsCount": 0
  }
}
```

## Updating a Spot

```
PUT /api/spots/:id
```

When updating a `Spot` record the property `modified` gets set to the current time.

### Request

```js
{
  "spot": {
    "title": "2017 Ford GT Spyder"
  }
}
```

### Response

```js
200 OK

```

## Deleting a Spot

```
DELETE /api/spots/:id
```

### Response

```js
200 OK

```

## Retrieving likes

```
GET spots/:id/likes
```

### Response

```js
{
  "likes": {
    "_id": "56d5b9e6e3a8a67007adae57",
    "spot": "56d5b9e6e3a8a67007adae56",
    "users": [
      {
        "_id": "56d5b54ffe79fd8906267e7c",
        "followers": "56d5b54ffe79fd8906267e7d",
        "name": "Jose Pierce",
        "handle": "JosePierce",
        "created": "2016-03-01T15:29:19.602Z",
        "spotsCount": 0,
        "followingCount": 0,
        "followersCount": 0,
        "likesCount": 0
      },

      ...
    ]
  }
}
```

## Adding a like

```
PUT spots/:id/likes
```

### Request

```js
{
  "user": "56d5b54ffe79fd8906267e7c"
}
```

### Response

```js
200 OK
```

## Removing a like

```
DELETE spots/:id/likes
```

### Request

```js
{
  "user": "56d5b54ffe79fd8906267e7c"
}
```

### Response

```js
200 OK
```
