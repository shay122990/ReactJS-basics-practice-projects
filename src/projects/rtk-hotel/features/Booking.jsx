import { useDispatch, useSelector } from "react-redux";
import styles from "../HotelBooking.module.css";
import {
  increaseNights,
  selectRoom,
  decreaseNights,
  confirmBooking,
  cancelBooking,
} from "./bookingSlice";
// import { useState } from "react";

function Booking() {
  const dispatch = useDispatch();
  const { rooms, selectedRoom, nights } = useSelector((state) => state.booking);

  function handleSelectRoom(id) {
    dispatch(selectRoom(id));
  }

  function incNights() {
    dispatch(increaseNights());
  }
  function decNights() {
    dispatch(decreaseNights());
  }

  function handleBooking() {
    dispatch(confirmBooking());
  }

  function handleCancelBooking() {
    dispatch(cancelBooking({ id: selectedRoom }));
  }

  return (
    <div className={styles.container}>
      <h1>Hotel Booking</h1>
      <div className={styles.rooms}>
        {rooms.map((room) => (
          <div className={styles.room} key={room.id}>
            <div>
              <h2>{room.name}</h2>
              <p>${room.price} / night</p>
            </div>
            {!room.booked ? (
              <button onClick={() => handleSelectRoom(room.id)}>Book</button>
            ) : (
              <span>Booked</span>
            )}
          </div>
        ))}
      </div>

      <div className={styles.booking}>
        <h2>Your Booking</h2>

        <p>Room: {selectedRoom}</p>

        <div className={styles.nights}>
          <button onClick={decNights}>-</button>
          <span>{nights} nights</span>
          <button onClick={incNights}>+</button>
        </div>

        <p>
          Total: $
          {selectedRoom
            ? rooms.find((room) => room.id === selectedRoom).price * nights
            : 0}
        </p>

        <button className={styles.confirm} onClick={handleBooking}>
          Confirm Booking
        </button>
        <button className={styles.confirm} onClick={handleCancelBooking}>
          Cancel Booking
        </button>
      </div>
    </div>
  );
}

export default Booking;
