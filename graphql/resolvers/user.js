const User = require("../../models/user");
const bcrypt = require("bcrypt");

module.exports = {
  users: async () => {
    try {
      return await User.find().populate({
        path: "createdEvents",
        select: "-creator",
      });
    } catch (err) {
      throw new Error("oops ! something go wrong");
    }
  },

  createUser: async (args) => {
    try {
      let { email, password } = args.userInput;
      password = await bcrypt.hash(password, 10);
      const newUser = await new User({ email, password }).save();
      console.log(newUser);
      return newUser;
    } catch (err) {
      throw new Error("oops ! something go wrong");
    }
  },
};
