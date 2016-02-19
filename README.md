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

## Model Notes


### Stats

| Property    | Description                                                  | Type     | Default Value   |
|-------------|--------------------------------------------------------------|----------|-----------------|
| `msrp`      | Manufacturer's suggested retail price in local currency.     | `Number` |                 |


### Location
- lat, long
- address eg. 123 Main Street