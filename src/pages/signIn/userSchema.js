import { Schema, model } from "mongoose";

const userSchema = new Schema({
  id: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

export default model("User", userSchema);
