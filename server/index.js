const express = require('express')
const app = express()
const routes = require('./routers/routes.js')
var http = require("http").createServer(app);
var cors = require("cors");
app.use(routes)
app.use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.get('/', function (req, res) {
  res.send("yoo")
})

http.listen(process.env.PORT || 3000, () => {
    console.log("app listening on port 3000");
  });