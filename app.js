const express = require('express');
const http = require("http");
const ejs = require("ejs");
const { json } = require('body-parser');
const app = express();

//for http data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3030;

app.set("view engine", ejs);

app.use("/img", express.static(__dirname + "/public/img"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));

app.use("/", require("./routes/mainpageroutes"));

http.createServer(app).listen(port, () => {
    console.log("my port nubmber is ", port);
});