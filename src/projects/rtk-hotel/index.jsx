import styles from "./HotelBooking.module.css";

function HotelBooking() {
  return (
    <div className={styles.container}>
      <h1>Hotel Booking</h1>

      <div className={styles.rooms}>
        <div className={styles.room}>
          <div>
            <h2>Room 101</h2>
            <p>$120 / night</p>
          </div>

          <button>Book</button>
        </div>

        <div className={styles.room}>
          <div>
            <h2>Room 102</h2>
            <p>$150 / night</p>
          </div>

          <button>Book</button>
        </div>

        <div className={styles.room}>
          <div>
            <h2>Room 103</h2>
            <p>$200 / night</p>
          </div>

          <span>Booked</span>
        </div>
      </div>

      <div className={styles.booking}>
        <h2>Your Booking</h2>

        <p>Room: Room 101</p>

        <div className={styles.nights}>
          <button>-</button>
          <span>3 nights</span>
          <button>+</button>
        </div>

        <p>Total: $360</p>

        <button className={styles.confirm}>Confirm Booking</button>
      </div>
    </div>
  );
}

export default HotelBooking;
