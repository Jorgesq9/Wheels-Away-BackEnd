const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      index: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    driverLicense: {
      type: String,
      required: true,
    },
  },
  // Add timestamps to the schema (createdAt, updatedAt)
  { timestamps: true },
);

const User = model("User", userSchema);

module.exports = User;
