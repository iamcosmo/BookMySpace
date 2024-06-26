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
    unique: true, 
    lowercase: true, 
    trim: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
  },
  contact: {
    type: String, 
    required: true,
  },
  usertype: {
    type: String,
    required: true,
    enum: ["user", "caterer", "photoGrapher", "decorator","venueOwner"], 
  },
  password: {
    type: String,
    required: true,
  },
});

const UserDataModel = mongoose.model("User", userdataSchema);
export default UserDataModel
