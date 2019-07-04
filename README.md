# Slack clone with real time data via sockets

## To Use

1. Clone this repo
2. In the terminal, navigate to the project folder and run 'npm i'
3. Create a 'config.js' file in the server folder (It is already ignored). Get the config details from the devs
4. For development - Use two terminals. Navigate to the project folder on both, and run npm start on one, and nodemon on the other.
5. For production - Navigate to the project folder and run npm run build. Once that is done, run nodemon.

#### Config should look something like this
```javascript
module.exports = {
  secret: "aetbmjljfcbn!%$*$nkrlhlkhnannalvlwher#$%66345nlk",
  connection: {
    host: "//host (you'll find this info in your heroku db credentials)",
    port: "//port",
    database: "//database",
    user: "//user",
    password: "//password",
    ssl: true
  },
  port: 8085
};
```

Note - Having the backend run on port 8085 allows npm start to run on port 3000 at the same time. This allows you to build your front end using npm start, while the backend will still respond to local api calls.

