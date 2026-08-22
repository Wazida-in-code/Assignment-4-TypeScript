"use strict";
const formatBookingConfirmation = (booking) => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};
console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" })); //"Aisha's table for 4 guests is confirmed at 7:00 PM."
console.log(formatBookingConfirmation({ name: "Rahim", guests: 2, time: "8:30 PM" })); //"Rahim's table for 2 guests is confirmed at 8:30 PM."
