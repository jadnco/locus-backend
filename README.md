# Locus Backend

This repository serves as the backend API for the Locus app. Everything is written in ES6+, so Babel is used to transpile into ES5.

## Getting Started

The API uses MongoDB, so make sure it's installed.

Run a new instance of MongoDB:
```sh
sudo mongod
```

Start running the server:
```sh
npm start
```

The API listens onto a *dynamic* IP address for development. This address will be given after running the above command.

## Development

Flow is being used to allow for statically typed JavaScript, make sure it's installed globally.

After creating new methods, run the following command and deal with any output properly:

```sh
flow
```

No unit or integration tests have been written yet, however they will be using Mocha and Chai.

To run unit tests:

```sh
npm test
```

## Production

Since ES6+ is not understood natively, a transpiled build needs to be created before pushing to a live production server. To create this build, run the following command:

```sh
npm run build
```

This command will generate a new `build` directory with files in ES5.

## Models

### User

| Property    | Description                                                  | Type     | Default Value |
|-------------|--------------------------------------------------------------|----------|---------------|
| `name` | Full/custom name of user.                     | `String` |               |
| `email`     | Email address used to sign up.                               | `String` |               |
| `description`    | Description of user, serves as the bio. | `String` |               |
| `location`    | Location of the user | `String` |               |
| `likesCount`    | Total sum of all Spots the user has liked. | `Number` | 0               |
| `followersCount`    | Total sum of all follower users. | `Number` | 0              |
| `followingCount`    | Total sum of all following users. | `Number` | 0              |
| `spotsCount`    | Total sum of all Spots created. | `Number` | 0              |
| `handle`    | Username and unique identifier with minimum of 3 characters. | `String` |               |
| `created`   | When the record was created.                                 | `Date`   | `Date.now`    |

#### GET users/:id[:handle]

Returns a single user record.

##### Example

> GET /api/users/smith89

Response:

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

#### GET users/:id[:handle]/followers

Returns a list of `User` objects.

##### Example

> GET /api/users/jadnco/followers

Response:

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
    }

    ...
  ]
}
```

### Car

| Property    | Description                                                  | Type     | Default Value   |
|-------------|--------------------------------------------------------------|----------|-----------------|
| `year`      | The year make of the car.                                    | `Number` | 0               |
| `created`   | When the record was created.                                 | `Date`   | `Date.now`      |


#### GET cars/:id

Returns a single car record.

Example response:

```js
{

}
```

### Spot

| Property    | Description                                                  | Type           | Default Value  |
|-------------|--------------------------------------------------------------|----------------|----------------|
| `hasPhoto`  | Whether a photo is contained or not.                         | `Boolean`      |                |
| `photo`     | Embedded `Photo` record or void.                             | `Photo | null` |                |
| `car`       | Reference to `Car` record.                                   | `Car`          |                |
| `spotter`   | Reference to `User` record.                                  | `User`         |                |
| `created`   | When the record was created.                                 | `Date`         | `Date.now`     |
| `viewsCount`     | How many times the Spot has been viewed by a unique user.    | `Number`       | 0              |
| `likesCount`     | Amount of times the spot has been liked.                     | `Number`       | 0              |
| `modified`  | When the record was last updated.                            | `Date`         |                |
| `likes`  | List of user ID's that have liked the spot.                     | `Array<User.id>`   |                |

#### GET spots/:id

Returns a single spot record.

Example response:

```js
{

}
```

### Stats

| Property    | Description                                                  | Type     | Default Value   |
|-------------|--------------------------------------------------------------|----------|-----------------|
| `msrp`      | Manufacturer's suggested retail price in local currency.     | `Number` |                 |


### Location
- lat, long
- address eg. 123 Main Street