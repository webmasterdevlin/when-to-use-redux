import React, { useState } from 'react'
import { Provider } from "react-redux";
import './App.css';
import HouseALevel1 from './components/HouseA/HouseALevel1'
import HouseBLevel1 from './components/HouseB/HouseBLevel1'
import store from "./store";

function App() {
  const [age, setAge] = useState(0)
  const handleAdd = (value) => {
    setAge(age + value);
  }
  return (

    <Provider store={store}>
      <HouseALevel1 add={handleAdd} />
      <HouseBLevel1  age={age} />
    </Provider>
  );
}

export default App;
