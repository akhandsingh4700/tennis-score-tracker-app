import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Routes from "./router/index";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;