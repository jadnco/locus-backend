# Spot

## Properties

| Name | Type | Default Value | Description
| --- | --- | --- | ---
| `hasPhoto` | `Boolean` | | Whether a photo is contained or not.
| `photo` | `String` | | The url to the photo.
| `car` | `Car.id` | | Reference to `Car` record.
| `spotter` | `User` | | Embedded `User` record.
| `created` | `Date` | `Date.now` | When the record was created.
| `viewsCount` | `Number`| 0 | How many times the Spot has been viewed by a unique user.
| `likesCount` | `Number`| 0 | Amount of times the spot has been liked.
| `modified` | `Date` | | When the record was last updated.
| `likes` | `Likes.id` | | Reference to a `Likes` record.

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
    "_id": "56c9549c638dab8f0061b993",
    "likes": "56c9549c638dab8f0061b994",
    "title": "2009 Maserati Gran Turismo",
    "photo": "3afdeccd71a202687894203a91a92072",
    "description": "The first 90% of a project takes 90% of the time, the last 10% takes the other 90% of the time.",
    "created": "2016-02-21T06:09:32.093Z",
    "spotter": [],
    "commentsCount": 96,
    "likesCount": 269,
    "viewsCount": 0
  }
}
```

## Creating a Spot

```
POST /api/spots
```

When a new `Spot` record is created, a `Likes` record also gets created. A relationship is then established by the two via ID reference.

### Request

```js
{
  "spot": {
    "title": "2017 Ford GT",
    "description": "Here's something to think about: How come you never see a headline like 'Psychic Wins Lottery.'"
  }
}
```

### Response

```js
{
  "spot": {
    "likes": "56ce70e4b78be0352f872a5c",
    "title": "2017 Ford GT",
    "description": "Here's something to think about: How come you never see a headline like 'Psychic Wins Lottery.'",
    "_id": "56ce70e4b78be0352f872a5b",
    "created": "2016-02-25T03:11:32.430Z",
    "spotter": [],
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
