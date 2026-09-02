import { Provider } from "react-redux";
import store from "./store";
import Layout from "./Layout";

export default function ReduxBank() {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
}
