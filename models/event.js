const mongosoe = require("mongoose");
const eventSchema = new mongosoe.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  creator: {
    type: mongosoe.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongosoe.model("Event", eventSchema);
