// const mongoose = require("mongoose");
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
  },
  venueId: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const paymentSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const cancellationPolicySchema = new mongoose.Schema({
  refundablePercentage: {
    type: Number,
    required: true,
  },
  cancellationDaysLimit: {
    type: Number,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bookingHistory: {
      type: [bookingSchema],
      default: [],
    },
    payments: {
      type: [paymentSchema],
      default: [],
    },
    cancellationPolicy: {
      type: [cancellationPolicySchema],
      default: [],
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);

// 'users' we created in the mongodb database a collection where user model gonna store\

// JSON FILE FOR USERS
// {
//     "id": "user_1",
//     "username": "john_doe",
//     "email": "john.doe@example.com",
//     "password": "hashed_password",
//     "bookingHistory": [
//       {
//         "bookingId": "booking_1",
//         "venueId": "venue_1",
//         "services": ["catering", "photography"],
//         "totalAmount": 1500,
//         "status": "confirmed",
//         "date": "2024-02-10"
//       }
//     ],
//     "payments": [
//       {
//         "transactionId": "txn_1",
//         "amount": 1500,
//         "date": "2024-02-05"
//       }
//     ],
//     "cancellationPolicy": {
//       "refundablePercentage": 50,
//       "cancellationDaysLimit": 7
//     }
//   },
