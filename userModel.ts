import mongoose from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
}

interface iUserData extends iUser, mongoose.Document {}

const userModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "books",
  },
});

export default mongoose.model<iUserData>("users", userModel);
