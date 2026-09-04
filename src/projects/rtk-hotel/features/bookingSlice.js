import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [
    { id: 1, name: "Room 101", price: 120, booked: false },
    { id: 2, name: "Room 102", price: 150, booked: false },
    { id: 3, name: "Room 103", price: 200, booked: true },
  ],
  selectedRoom: null,
  nights: 1,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectRoom(state, action) {
      console.log(state, action);
    },

    setNights(state, action) {
      console.log(state, action);
    },

    increaseNights(state) {
      console.log(state);
    },

    decreaseNights(state) {
      console.log(state);
    },

    confirmBooking(state) {
      console.log(state);
    },

    cancelBooking(state) {
      console.log(state);
    },
  },
});

export const {
  selectRoom,
  setNights,
  increaseNights,
  decreaseNights,
  confirmBooking,
  cancelBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
