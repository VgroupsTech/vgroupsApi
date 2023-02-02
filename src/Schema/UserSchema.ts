import mongoose from "mongoose";
import { User } from "../Common";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    password: {
      type: String,
      required: true,
    },
    personalDetails: {
      type: Object,
      required: true,
    },
    educationalDetails: {
      ssc: {
        schoolName: {
          type: String,
          required: [true, "sscSchoolName:School Name is required"],
        },
        passoutYear: {
          type: String,
          required: [true, "sscPassoutYear: Passout year  is required"],
        },
        percentage: {
          type: String,
          required: [true, "sscPercentage: Percentage is required"],
        },
      },
      intermediate: {
        schoolName: {
          type: String,
          required: [true, "Intermediate School Name is required"],
        },
        passoutYear: {
          type: String,
          required: [true, "Intermediate Passout year is required"],
        },
        percentage: {
          type: String,
          required: [true, "Intermediate Percentage is required"],
        },
      },
      graduation: {
        schoolName: { type: String },
        passoutYear: { type: String },
        percentage: { type: String },
      },
      postGraduation: {
        schoolName: { type: String },
        passoutYear: { type: String },
        percentage: { type: String },
      },
    },
    employementDetails: {
      hasPreviousEmployement: { type: Boolean },
      companyName: { type: String },
      experience: { type: Number },
      hasEpf: { type: Boolean },
      epfNumber: { type: Number },
    },
  },
  { versionKey: false, timestamps: false }
);

export const Users = mongoose.model<User>("users", UserSchema);
