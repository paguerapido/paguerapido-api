# PagueRapido API

## How to run this API

If you don't have MongoDB and Redis installed, please run the following commands:

To install and use `MongoDB`:


```bash
sudo apt install mongodb
sudo systemctl enable mongodb
sudo systemctl start mongodb
```


To install and use `Redis`:


```bash
sudo apt install redis
sudo systemctl enable redis-server
sudo systemctl start redis-server
```


After that, all you have to do is execute:


```bash
yarn run dev
```
