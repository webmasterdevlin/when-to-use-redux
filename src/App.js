import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import HouseALevel1 from './components/HouseA/HouseALevel1'
import HouseBLevel1 from './components/HouseB/HouseBLevel1'
import store from "./store";

function App() {
  return (

    <Provider store={store}>
      <HouseALevel1 />
      <HouseBLevel1 />
    </Provider>
  );
}

export default App;
