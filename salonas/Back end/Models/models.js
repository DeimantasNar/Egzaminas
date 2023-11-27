import mongoose from "mongoose";
const InfoSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 25,
  },
  LastName: {
    type: String,
    require: true,
    minLength: 2,
    maxLength: 35,
  },
  RegistrationDate: {
    type: Date,
  },
});

export default mongoose.model("info.js", InfoSchema);