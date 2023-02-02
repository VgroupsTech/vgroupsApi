import mongoose from "mongoose";

export type User = {
  _id?: User;
  username: string;
  password: string;
  personalDetails: {
    firstName: string;
    lastName: string;
    adhaar: number;
    panNumber: string;
    address: string;
    pincode: number;
    phoneNumber: number;
    email: string;
    fatherName: string;
    motherName: string;
    gender: string;
    bloodGroup: string;
    maritalStatus: string;
    userRole: { id: number; value: string; label: string };
    department: { id: number; value: string; label: string };
    bankAcNumber: number;
    bankName: string;
    ifscCode: string;
    pinCode: number;
  };
  educationalDetails: {
    ssc: { schoolName: string; percentage: number; passoutYear: number };
    intermediate: {
      schoolName: string;
      percentage: number;
      passoutYear: number;
    };
    graduation: {
      schoolName: string;
      percentage: number;
      passoutYear: number;
    };
    postGraduation: {
      schoolName: string;
      percentage: number;
      passoutYear: number;
    };
  };
  employementDetails: {
    hasPreviousEmployement: boolean;
    hasEpf?: boolean;
    experience?: number;
    companyName?: string;
    epfNumber: number;
  };
  errors?: any;
};

export const ObjectId = mongoose.Types.ObjectId;
