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
      state.selectedRoom = action.payload;
    },

    setNights(state, action) {
      state.nights = action.payload;
    },

    increaseNights(state) {
      state.nights = state.nights + 1;
    },

    decreaseNights(state) {
      state.nights = state.nights - 1;
    },

    confirmBooking(state) {
      const room = state.rooms.find((room) => room.id === state.selectedRoom);

      if (room) {
        room.booked = true;
      }
      console.log("booking confirmed");
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
