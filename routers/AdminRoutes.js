const express = require("express");
const adminRoute = express.Router();
const userCrud = require("../crudOperations/crudOperations");

adminRoute.post("/addData", (req, res) => {
  let data = req.body;
  userCrud.createUser(data, res);
});
adminRoute.get("/fetchData", (req, res) => {
  var data = {};
  userCrud.findUser(data, res);
});
adminRoute.post("/updateData", (req, res) => {
  var data = req.body;
  userCrud.updateData(data, res);
});

adminRoute.post("/deleteData", (req, res) => {
  var data = req.body;
  userCrud.deleteData(data, res);
});

module.exports = adminRoute;
