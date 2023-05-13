const Booking = require("../../models/booking");
module.exports = {
  bookings: async () => {
    const bookings = await Booking.find()
      .populate({
        path: "event",
        populate: {
          path: "creator",
        },
      })
      .populate({
        path: "user",
      });
    return bookings;
  },

  bookEvent: async (args) => {
    try {
      const { user, event } = args;
      return await new Booking({ user, event }).save();
    } catch (err) {
      throw new Error(err.message);
    }
  },
  cancelBook: async (bookId) => {
    const booking = Booking.findByIdAndDelete(bookId)
      .populate({
        path: "event",
        populate: {
          path: "creator",
        },
      })
      .populate({
        path: "user",
      });
    if (!booking) throw new Error("booking does not exist");
    return booking;
  },
};
