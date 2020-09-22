// import express from "express"
// import bodyParser from "body-parser"
// import orderRouter from "./routes/order.js";
// import extractRouter from "./routes/extract.js";
// import indexRouter from "./routes/index.js"
// import errorRouter from "./routes/error.js";

const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const orderRouter = require("./routes/order.js");
const extractRouter = require("./routes/extract.js");
const indexRouter = require("./routes/index.js");
const errorRouter = require("./routes/error.js");
const customerRouter = require("./routes/customer");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded());
app.use(orderRouter);
app.use(extractRouter);
app.use(customerRouter)
app.use(indexRouter);
app.use(errorRouter);

const port = 3000;
app.listen(port);
console.log(`Listening at port ${port} at localhost...`);
