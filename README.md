# 🔗 Live Deploy Link

### https://defiant-toad-gear.cyclic.app/

Hosted on cyclic.ch

# 🔥 Technology stack

### The technology stack used for the product includes Express.js (v4.18.2) as the backend framework, MongoDB (v5.6.0) as the database, and OpenAI (v3.3.0) for additional functionalities. Other dependencies such as body-parser, cors, dotenv, express-async-handler, mongoose, and nodemon were also utilized for enhanced development and testing capabilities.

#### Packages we use in this project

| Package                 | Version   |
| :---------------------- | :-------- |
| `body-parse`            | `^1.20.2` |
| `cors`                  | `^2.8.5`  |
| `dotenv`                | `^16.3.1` |
| `express`               | `^4.18.2` |
| `express-async-handler` | `^1.2.0`  |
| `mongodb`               | `^5.6.0`  |
| `mongoose`              | `^7.3.0`  |
| `nodemon`               | `^2.0.22` |
| `openai`                | `^3.3.0`  |

# 📗 Project Purpose

### The purpose of the project backend is to handle the logic and functionality of the minimum viable product, allowing it to function smoothly and effectively.

# 📷 Functionalities

#### We Follow Moduler Pattern in our backend

```http
  index.js > src/Module Folder
  Route > Controller > Service > Model
```

#### index.js + route.js

![App Screenshot](https://i.ibb.co/r4X9vG4/1png.png)

#### controller.js + service.js

![App Screenshot](https://i.ibb.co/ZggPDyC/2.png)

# 🏆 API Reference

## Eligibility Check

#### Check the eligibility for compensation

```http
  POST /api/v1/eligibility
```

| Parameter                              | Type   | Description                          |
| :------------------------------------- | :----- | :----------------------------------- |
| `user's flight details(Mention Below)` | `JSON` | generate automated claim assessment. |

This data need from req.body

```bash
email, airlineName, flightNumber,
dateOfDisruption, reasonForDisruption,
boardingPassNumber, boardingPassDate,
emailCommunicationSummary,
messageExchangeSummary,
```

#### Get all eligibility data of a user

```http
  GET /api/v1/eligibility/${email}
```

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `email`   | `string` | **Required**. this users email, all eligibility show |

#### Get A Single Eligibility data of a user

```http
  GET /api/v1/eligibility/single/${id}
```

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `string` | **Required**. find details of a eligibility |

#### Delete Single Eligibility Data

```http
  DELETE /api/v1/eligibility/delete/${id}
```

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| `id`      | `string` | **Required**. Delete a single eligibility check data |

## Claim Letter Generate

#### Generate a claim letter

```http
  POST /api/v1/letter
```

| Parameter                              | Type   | Description              |
| :------------------------------------- | :----- | :----------------------- |
| `user's flight details(Mention Below)` | `JSON` | generate a claim letter. |

This data need from req.body

```bash
email, airlineName, flightNumber,
dateOfDisruption, reasonForDisruption,
boardingPassNumber, boardingPassDate,
emailCommunicationSummary,
messageExchangeSummary,
```

#### Get all claim Letter of a user

```http
  GET /api/v1/letter/${email}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `email`   | `string` | **Required**. get all claim letter |

#### Get A Single Claim Letter

```http
  GET /api/v1/letter/single/${id}
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Required**. Find a claim letter using id |

#### Delete A Claim Letter

```http
  DELETE /api/v1/letter/delete/${id}
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Required**. Delete a single Claim Letter |

## Airline Policy

### All data came from mongoDB, if not available then ai Generate

```http
  POST /api/v1/policy
```

| Parameter     | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `airlineName` | `string` | see policy of that airline |

## Query

### user can send his feedback

```http
  POST /api/v1/query
```

| Parameter                             | Type   | Description                        |
| :------------------------------------ | :----- | :--------------------------------- |
| `user's query details(Mention Below)` | `JSON` | user can share his problem/opinion |

This data need from req.body

```bash
howDoYouKnowUs, category, rating,
email, feedback, suggestions
```

## User Data

#### Save new user details (Email, image, Name)

```http
  POST /api/v1/users
```

| Parameter               | Type   | Description                                             |
| :---------------------- | :----- | :------------------------------------------------------ |
| `name, email, photoUrl` | `JSON` | **Required**. from req.body this data will be collected |

#### Get User Details

```http
  GET /api/v1/users/data/${email}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `email`   | `string` | **Required**. email of item to fetch |

#### Update User Details

```http
  UPDATE /api/v1/users/${id}
```

| Parameter         | Type   | Description             |
| :---------------- | :----- | :---------------------- |
| `name, photoUrl ` | `JSON` | Id user will be updated |
