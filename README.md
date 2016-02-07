## Models

### User

| Property    | Description                                                  | Type     | Example                  |
|-------------|--------------------------------------------------------------|----------|--------------------------|
| `firstName` | Self-explanatory – first name of user.                       | `String` | John                     |
| `lastName`  | Last name of user.                                           | `String` | Smith                    |
| `fullName`  | Concatenation of the `firstName` and `lastName`.             | `String` | John Smith               |
| `handle`    | Username and unique identifier with minimum of 3 characters. | `String` | johnSmith                |
| `created`   | When the record was created.                                 | `Date`   | 2015-12-29T01:46:49.453Z |
| `email`     | Email address used to sign up.                               | `String` | john.smith@example.com   |


#### GET `user/:id[:handle]`

Returns a single user record.

##### Example

> GET /api/user/jadnco

Response:

```js
{
  "user": {
    "_id": "559443b15b95cfd61950bb65",
    "firstName": "John",
    "lastName": "Smith"
    "fullName": "John Smith",
    "handle": "smith89",
    "email": "smith@example.com",
    "created": "2015-07-01T19:46:57.273Z"
  }
}
```

### Car

| Property    | Description                                                  | Type     | Example                  |
|-------------|--------------------------------------------------------------|----------|--------------------------|
| `year`      | The year make of the car.                                    | `Number` | 2016                     |
| `created`   | When the record was created.                                 | `Date`   | 2015-12-29T01:46:49.453Z |


#### GET `car/:id`

Returns a single car record.

Example response:

```js
{

}
```

### Spot

| Property    | Description                                                  | Type           | Example                  |
|-------------|--------------------------------------------------------------|----------------|--------------------------|
| `hasPhoto`  | Whether a photo is contained or not.                         | `Boolean`      | true                     |
| `photo`     | Embedded `Photo` record or void.                             | `Photo | null` |                          |
| `car`       | Reference to `Car` record.                                   | `Car`          | car id                   |
| `spotter`   | Reference to `User` record.                                  | `User`         | user id                  |
| `created`   | When the record was created.                                 | `Date`         | 2015-12-29T01:46:49.453Z |


#### GET `spot/:id`

Returns a single spot record.

Example response:

```js
{

}
```

### Stats

| Property    | Description                                                  | Type     | Example                  |
|-------------|--------------------------------------------------------------|----------|--------------------------|
| `msrp`      | Manufacturer's suggested retail price in local currency.     | `Number` | 86000                    |


### Location
- lat, long
- address eg. 123 Main Street