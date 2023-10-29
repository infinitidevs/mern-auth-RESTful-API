# Auth RESTful API for a Coffee Ecommerce using MongoDB, Express, NodeJS & JWT | <a href="https://mern-auth-restapi.vercel.app/api" style="color:#2f81f7" target="_blank">Browse API!</a>

## Populate the seed

To populate the API seed run the command :

```bash
npm run seed
```

It will create two collections `coffees` and `varieties` in your MongoDB.

## Start the server

To start the server run on your terminal:

```bash
npm run start
```

It will automatically connect to the MongoDB host `127.0.0.1` on the port `27017`.

To run the server on watch mode:

```bash
npm run dev
```

## API Coffees Data Structure

The JSON Data that the API for /coffees is gonna return has the following format:

```json
{
  "_id": "serial",
  "name": "Coffee brand name",
  "description": "Brief Coffee insight",
  "scaScore": "Coffee specialty certification",
  "process": "Coffee cherry treatment process: natural, washed or honey",
  "varietyType": "Variety of the coffee plant,mainly Arabica or Robusta",
  "variety": "Id of the variety it belongs to",
  "altitude": "Harvest altitude",
  "taste": "Cup organoleptic properties",
  "grinding": "Grinded grain size",
  "roasting": "Roasting level",
  "region": "Crop location",
  "price": "Coffee price per unit",
  "grams": "Product weight",
  "img": "Product picture"
}
```

## API Varieties Data Structure

The JSON Data that the API for /varieties is gonna return has the following format:

```json
{
  "_id": "serial",
  "name": "Variety name",
  "description": "Brief variety insight",
  "origin": "Origin where the variety was discovered",
  "coffees": "Array of coffees ids"
}
```

## Documentation for API Endpoints

All URIs are relative to _https://localhost:4001/api_ or https://mern-auth-restapi.vercel.app/api

| HTTP request                                   | Description                                 |
| ---------------------------------------------- | --------------------------------------------|
|                                                |                                             |
|**Coffees**                                     |                                             |
| **GET** /coffees                               | Get All Coffees                             |
| **GET** /coffees/{coffeeId}                    | Get Coffee by id                            |
| **POST** /coffees *                            | Create new Coffee using body params         |
| **PUT** /coffees/{coffeeId} *                  | Update Coffee using body params             |
| **DELETE** /coffees/{coffeeId} *               | Delete Coffee by id                         |
|                                                |                                             |
|**Varieties**                                   |                                             |
| **GET** /varieties                             | Get All Varieties                           |
| **GET** /varieties/{varietyId}                 | Get Variety by id                           |
| **POST** /varieties *                          | Create new Variety using body params        |
| **PUT** /varieties/{varietyId} *               | Update Variety using body params            |
| **DELETE** /varieties/{varietyId} *            | Delete Variety by id                        |
|                                                |                                             |
|**Users Authentication**                        |                                             |
| **POST** /auth/register                        | User registration                           |
| **POST** /auth/login                           | Log in                                      |
| **POST** /auth/avatar *                        | Create or update User avatar                |
|                                                |                                             |
|**Users Admin**                                 |                                             |
| **GET** /users **                              | Get All Users                               |
| **DELETE** /users/{userId} **                  | Delete User By Id                           |

- *Must have a login token
- **Must have an admin query token