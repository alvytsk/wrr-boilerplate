import React from "react";
import "./App.less";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="app">
      Welcome to Webpack5-React-Redux Boilerplate!
      <p />
      <img src="assets/react-redux.png" height={200} />
      <p />
      <Counter />
    </div>
  );
};

export default App;
