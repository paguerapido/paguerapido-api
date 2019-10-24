# PagueRapido API

## Architecture

![Architecture](https://raw.githubusercontent.com/paguerapido/paguerapido-api/graficos/images/architecture.png)

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

## Authentication

This application uses the JWT standart for authentication and authorization.
Query to createUser(username, password, email) to create a new User, then login to /auth/login
with username and password at the request body.

## Authorization

For authorization, the system uses a role based authorization. All users have the basic "REGULAR" role, but only users with the "ADMIN" role can perform some actions. The queries which specifies some authorization are annotated with the @authorization directive and the expected role is passed as an argument. If no role is passed to the directive, the system takes the "REGULAR" role as default.

## Cache

The system uses the Apollo server default cache service. The entities were cached, not the queries. Cache presented a huge performance gain, as it can be seen in the tests below which where run with JMeter with a route before and after caching it.

![Response Time with no Cache](https://raw.githubusercontent.com/paguerapido/paguerapido-api/graficos/images/responsetimesemcache.png)

Neste primeiro gráfico podemos ver que o Response Time fica em média pela faixa de 600ms.

Agora, vamos observar o resultado do Response Time ao adicionar Cache à nossa requisição:

![Response Time with Cache](https://raw.githubusercontent.com/paguerapido/paguerapido-api/graficos/images/responsetimecomcache.png)

Vemos que o Cache diminui bastante o Response Time da nossa aplicação, este agora se mantendo na faixa de 300ms. Ou seja, o cache diminuiu pela metade o tempo de resposta da aplicação na rota na qual foi adicionado.
