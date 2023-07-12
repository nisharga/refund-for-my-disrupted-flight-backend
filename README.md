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

# Installation

If you want to run this code locally, you have to follow some steps.

### First Step:

Open the command prompt and Clone The Main Branch by this code

```bash
  git clone https://github.com/nisharga/refund-for-my-disrupted-flight-backend.git
```

Wait for some time, and the code will clone automatically. Then change directory to the folder by

```bash
 cd refund-for-my-disrupted-flight
```

### Second Step:

Now, you need have to install all dependencies by this code.

```bash
 npm install
```

### Third Step:

Now You have to create a new file called bash `.env` in root and provide three values inside: MONGO_URI, PORT, and OPENAI_API_KEY.

Your .env file locks like this

```bash
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@awscluster1.cuw4f6e.mongodb.net/refund-disrupted-flight?retryWrites=true&w=majority

PORT = 5000

OPENAI_API_KEY = sk-2deko0fddzrAmdkvmvv.........

```

#### Thats how you get MONGO_URI (USER && PASS):

Login From Here ` https://account.mongodb.com/account/login` After logging in, click on "Database Access" to add a new database user. Provide a name, password, and select the "Built-in Role" as "Admin". Save the changes.
This username, and pass you will add in MONGO_URI.

#### Thats how you get OPENAI_API_KEY:

Login From Here ` https://platform.openai.com/account/api-keys` After logging in, you will see an option to "Create a new secret key". Click here and provide a name. Finally, you will obtain an API key, such as "sk-cgffcvvggddrf".

### Fourth & Final Step:

Now Start Your Project by

```bash
 npm start
```

If you have done everything perfectly, you will see this on the console.

"port listen, 5000"

"Connected to MongoDB"

Congratulations! You have successfully run the code.

# Product UI

https://drive.google.com/file/d/1hqSmUx62VJJMyOu7MHPKlLN51U-JhhHS/view

## Authors

- [@Nisharga Kabir](https://github.com/nisharga)
- [@Amena Hira](https://github.com/amena-hira)
