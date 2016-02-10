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

## API

- [User](docs/api/User.md)

## Models

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