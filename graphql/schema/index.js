const { buildSchema } = require("graphql");
const userSchema = require("./user");
const eventSchema = require("./event");
const bookingSchema = require("./booking");
const rootSchema = require("./schema");
module.exports = buildSchema(`
    ${userSchema}
    ${eventSchema}
    ${bookingSchema}
    ${rootSchema}
    `);
