const mongoose = require("mongoose");
var dbConfig = require("../config/config");
mongoose.connect(dbConfig.url, { useNewUrlParser: true });
module.exports = mongoose;
