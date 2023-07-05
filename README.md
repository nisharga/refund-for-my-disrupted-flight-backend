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

## Authors

- [@Nisharga Kabir](https://github.com/nisharga)
- [@Amena Hira](https://github.com/amena-hira)
