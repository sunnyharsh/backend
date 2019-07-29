const connection = require("../connections/connection");
const userSchema = connection.Schema({
    title: { type: String },
    desc: { type: String }
});
var userModal = connection.model("userRegister", userSchema);
module.exports = userModal;
