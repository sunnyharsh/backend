const userSchema = require("../schemas/userSchema");
const userCrud = {
  createUser(obj, res) {
    userSchema.create(obj, (err, data) => {
      if (err) {
        res.status(400).send({ success: false });
      } else {
        userSchema.find({}, (err, data) => {
          res.status(200).send({ success: true, data: data });
        });
      }
    });
  },
  findUser(obj, res) {
    userSchema.find({}, (err, data) => {
      if (err) {
        res.status(400).send({ success: false });
      } else {
        res.status(200).send({ success: true, data: data });
      }
    });
  },
  updateData(obj, res) {
    userSchema.findOne({ _id: obj._id }, (err, data) => {
      if (err) {
        res.status(400).send({ success: false });
      } else {
        data.title = obj.title;
        data.desc = obj.desc;
        data.save();

        setTimeout(() => {
          userSchema.find({}, (err, data) => {
            res.status(200).send({ success: true, data: data });
          });
        }, 1000);
      }
    });
  },
  deleteData(obj, res) {
    userSchema.findOneAndDelete({ _id: obj._id }, (err, data) => {
      if (err) {
        res.status(400).send({
          success: false
        });
      } else {
        userSchema.find({}, (err, data) => {
          res.status(200).send({ success: true, data: data });
        });
      }
    });
  }
};
module.exports = userCrud;
