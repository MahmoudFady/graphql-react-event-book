const mongosoe = require("mongoose");
const userSchema = new mongosoe.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdEvents: [
    {
      type: mongosoe.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});
module.exports = mongosoe.model("User", userSchema);
