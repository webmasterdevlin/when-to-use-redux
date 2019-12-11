import React, { useState } from 'react'
import { Provider } from "react-redux";
import './App.css';
import HouseALevel1 from './components/HouseA/HouseALevel1'
import HouseBLevel1 from './components/HouseB/HouseBLevel1'
import store from "./store";

function App() {
  const [age, setAge] = useState(0)
  const handlePass = (value) => {
    setAge(value);
  }
  return (

    <Provider store={store}>
      <HouseALevel1 passFromGrandParent={handlePass} />
      <HouseBLevel1 age={age} />
    </Provider>
  );
}

export default App;
