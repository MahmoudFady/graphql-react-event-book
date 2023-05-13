const Event = require("../../models/event");
module.exports = {
  events: async () => {
    const events = await Event.find().populate({
      path: "creator",
      select: "-password",
    });
    return events;
  },
  createEvent: async (args) => {
    const { title, description, price, date } = args.eventInput;
    const newEvent = await Event({
      title,
      description,
      price,
      date: new Date(date).toISOString(),
    }).save();
    return newEvent;
  },
};
