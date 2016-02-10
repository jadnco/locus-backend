# User

## Properties

| Name | Type | Default Value | Description
| --- | --- | --- | ---
| `name` | `String` | | Full/custom name of user.
| `email` | `String` | | Email address used to sign up.
| `description` | `String` | | Description of user, serves as the bio. 
| `location` | `String` | | Location of the user.
| `likesCount` | `Number` | 0 | Total sum of all Spots the user has liked.
| `followersCount` | `Number` | 0 | | Total sum of all follower users.
| `followingCount` | `Number` | 0 | | Total sum of all following users.
| `spotsCount` | `Number` | 0 | Total sum of all Spots created.
| `handle` | `String` | | Username and unique identifier with minimum of 3 characters.
| `created` | `Date` | `Date.now` | | When the record was created.

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