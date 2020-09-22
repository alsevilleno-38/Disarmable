// import express from "express";
// import path from "path";
const express = require("express");
const path = require('path');
const errorController = require("../controllers/error")

const router = express.Router();
router.use("/", errorController.handler);

module.exports = router;