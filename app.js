const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const AdminRoutes = require("./routers/AdminRoutes");
app.use(express.static("../crud_with_node/build/"));

app.use("/", AdminRoutes);

app.listen(1234, () => {
    console.log("server start....");
});
