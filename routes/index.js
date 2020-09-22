// import express from "express";
const express = require("express");
// import path from "path";
const path = require("path");
const fs = require("fs");
const indexController = require("../controllers/index");

const router = express.Router();

router.get("/", indexController.handler);
router.get("/display", indexController.display);
router.get("/details/:id", indexController.details);
router.get("/details/:id/:name", indexController.detailsName);


module.exports = router;