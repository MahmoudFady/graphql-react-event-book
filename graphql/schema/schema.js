module.exports = `
    type rootQuery{
        events : [Event!]!
        users : [User!]!
        bookings : [Booking!]!
    }
    type rootMutation{
        createEvent(eventInput : EventInput) : Event
        createUser(userInput : UserInput) : User
        bookEvent(user : ID! , event : ID!) : Booking
        cancelBook (bookId : ID!) : Event
    }
    schema{
        query : rootQuery
        mutation : rootMutation
    }
    `;
