import mongoose from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
}

interface iUserData extends iUser, mongoose.Document {}

const bookModel = new mongoose.Schema({
  name: {
    type: String,
  },
  pageNumb: {
    type: String,
  },
});

export default mongoose.model<iUserData>("books", bookModel);
