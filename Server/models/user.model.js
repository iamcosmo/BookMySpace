import mongoose from "mongoose";

const userdataSchema = mongoose.Schema({
  name: {
    type: {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: false,
      },
    },
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
    lowercase: true, // Convert email to lowercase before saving
    trim: true, // Trim whitespace from email
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email format validation
  },
  contact: {
    type: String, // Store contact number as string
    required: true,
  },
  usertype: {
    type: String,
    required: true,
    enum: ["user", "caterer", "photographer", "decorator"], // Example of enum validation
  },
  password: {
    type: String,
    required: true,
  },
});

const UserDataModel = mongoose.model("UserData", userdataSchema);
export default UserDataModel
