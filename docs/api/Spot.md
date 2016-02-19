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

## Retrieving a single User

```
GET users/:id[:handle]
```

### Response

```js
{
  "user": {
    "name": "John Smith",
    "handle": "smith89",
    "location": "Toronto, Canada",
    "email": "smith@example.com",
    "description": "Just a normal dude with a normal name.",
    "_id": "56b95ffa9a663798f7c98330",
    "created": "2016-02-09T03:41:46.934Z",
    "spotsCount": 0,
    "followingCount": 0,
    "followersCount": 0,
    "likesCount": 0
  }
}
```

## Retrieving authenticated User

```
GET users/me
```

## Retrieving followers

```
GET /api/users/:id[:handle]/followers
```

### Response

Returns a list of `User` objects.

```js
{
  "users": [
    {
      "name": "John Smith",
      "handle": "smith89",
      "location": "Toronto, Canada",
      "email": "smith@example.com",
      "description": "Just a normal dude with a normal name.",
      "_id": "56b95ffa9a663798f7c98330",
      "created": "2016-02-09T03:41:46.934Z",
      "spotsCount": 0,
      "followingCount": 0,
      "followersCount": 0,
      "likesCount": 0
    },

    ...
  ]
}
```

## Retrieving following

```
GET /api/users/:id[:handle]/following
```

### Response

Returns a list of `User` objects.

```js
{
  "users": [
    {
      "name": "John Smith",
      "handle": "smith89",
      "location": "Toronto, Canada",
      "email": "smith@example.com",
      "description": "Just a normal dude with a normal name.",
      "_id": "56b95ffa9a663798f7c98330",
      "created": "2016-02-09T03:41:46.934Z",
      "spotsCount": 0,
      "followingCount": 0,
      "followersCount": 0,
      "likesCount": 0
    },

    ...
  ]
}
```

## Creating a User

```
POST /api/users
```

## Updating a User

```
PUT /api/users/:id[:handle]
```

## Deleting a User

```
DELETE /api/users/:id[:handle]
```