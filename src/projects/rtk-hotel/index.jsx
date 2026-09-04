import Booking from "./features/Booking";
import { Provider } from "react-redux";
import store from "./store";

function HotelBooking() {
  return (
    <Provider store={store}>
      <Booking />
    </Provider>
  );
}

export default HotelBooking;
