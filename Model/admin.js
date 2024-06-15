const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    default: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("admin", adminSchema);
