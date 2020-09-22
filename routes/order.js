const express = require("express");
const path = require("path");
const fs = require("fs");
const ordersController = require("../controllers/orders");

const router = express.Router();

router.get("/order", ordersController.getHandler);
router.post("/order", ordersController.postHandler);

module.exports = router;