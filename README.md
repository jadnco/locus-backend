## Models

### User

| Property    | Description                                                  | Type     | Example                  |
|-------------|--------------------------------------------------------------|----------|--------------------------|
| `firstName` |                                                              | `String` | John                     |
| `lastName`  |                                                              | `String` | Smith                    |
| `fullName`  | Concatenation of the `firstName` and `lastName`.             | `String` | John Smith               |
| `handle`    | Username and unique identifier with minimum of 3 characters. | `String` | johnSmith                |
| `joinDate`  | When the user first created their account.                   | `Date`   | 2015-12-29T01:46:49.453Z |
| `email`     | Email address used to sign up.                               | `String` | john.smith@example.com   |


#### GET user/:id

Returns a single user record.

Example response:

```js
{

}
```

### Spot
- Embedded stats (km/h, $, etc)
- Photo (thumbnail, large)
- Poster (User ref)
- hasImage
  - Not all posts will contain an image.

### Location
- lat, long
- address eg. 123 Main Street