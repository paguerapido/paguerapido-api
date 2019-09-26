# PagueRapido API

## Architecture
Access [here](https://docs.google.com/drawings/d/1BvKkllylvRzKgT_U5Oi3gg-je70_MXtmOB54OJu3KO8/edit?usp=sharing)

## How to run this API

If you don't have MongoDB installed, please run the following commands:

To install and use `MongoDB`:


```bash
sudo apt install mongodb
sudo systemctl enable mongodb
sudo systemctl start mongodb
```


After that, all you have to do is execute:


```bash
yarn run dev
```

Now the API is ready to be used!

You can test it from Postman or through the browser by accessing `https://localhost:PORT`, where PORT is where the API is running locally (the default is 5000).


## Authentication & Authorization

This application uses the JWT standart for authentication and authorization.
Query to createUser(username, password, email) to create a new User, then login to /auth/login
with username and password at the request body.
Some queries and mutations needs authentication (see more at GraphQL section), so a valid authorization token
must be provided.
