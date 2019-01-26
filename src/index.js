import React, { Component } from "react";
import "./config/ReactotronConfig";
import { View, Text, Fragment } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import Player from "./components/Player";

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);
export default App;
