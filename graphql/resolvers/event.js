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
    const { title, description, price, date, creator } = args.eventInput;
    const newEvent = await Event({
      title,
      description,
      price,
      date: new Date(date).toISOString(),
      creator,
    }).save();
    return newEvent;
  },
};
