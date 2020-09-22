// import express from "express";
// import fs from "fs";
// import {custom} from "../page.js";
const express = require("express");
const fs = require("fs");
const extractController = require("../controllers/extract");

const router = express.Router();

router.get("/extract", extractController.handler);
router.get("/extract/generate", extractController.generator);

module.exports = router;