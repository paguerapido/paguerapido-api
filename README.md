# PagueRapido API

## Architecture
![](https://lh3.googleusercontent.com/QWsb90SOR3y5dSshIDr7roWvr6NshMSSXiAVRs3VRz3BruWbcIxfQo9eF4EA6VQCJPasfDzGLLSreElOiNtVnHZhYAyeqybesh1cn-5gm7Sd8G1nfwSL3hI3m0xspkTNtwFdHkr8oDCto4mFze7xJbX-2JfMAW3ox_-LG4kTs2R-M9J-8vnAl9j3Am3CaVvu4alRQbHqjY97r87UwphyqXt1jiqKHwFXAOd5HGd-cf3IlF4aT4zUXslPgRhlB80b6CmdlrFgeHqSA766SG0SNYZJwkosyNz6KDr0uTuw0U2-gz2Z-B3cSuaBbBNZ7EZBv7Kkw1dlTDeiUSnuU0Eyg16jXELn-WpzrrhqkKF6bmovCDTikdJ4dOCouJsbWgXcNL_0w0GyZtWDL6rfw1OA8ksIG9xrwg5xz3wEnZHvPuywdJmVvNWFRfBPG3eFC7HUypFbESeTk_KXzlDW5gB5Z0SSR7B0UVXDAfqNRiui9470C7h9mHlRq6kQg7KxBYNZI5Qz-XyDVLiIaPah5h-ngg-MSs0Lm6Dohr2D2i-MkjGuYEjF5eNx0YqsqvZKaFr90GBJ_MCtM-jzXkBBOcwwR1_WTEIsKB1u3a-dscl8lY5H_IKjJWmgTgKozMp6IYG6mM7elumCjw-HHdI2vMc3xc1PmYWYNCFn=w940-h705-no)

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
## Authentication & Authorization

This application uses the JWT standart for authentication and authorization.
Query to createUser(username, password, email) to create a new User, then login to /auth/login
with username and password at the request body.
Some queries and mutations needs authentication (see more at GraphQL section), so a valid authorization token
must be provided.