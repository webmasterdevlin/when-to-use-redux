import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {updateText} from "../../store/house/house-actions";

export default function HouseALevel2({add}) {
  const dispatch = useDispatch();
  const {text} = useSelector(state => state.houseReducer)

  const handleAdd = (n) => {
    add(n);
  };

  return <div style={{width: '20vw', height: '20vh',margin: '2.5rem', background: 'pink'}}>
    <h1>House A - 5 Level Deep</h1>
    <h2>{text}</h2>
    <div>
      <button onClick={() => dispatch(updateText("Bruce Wayne"))}>BUSINESS MODE</button>
    </div>
    <div>
      <button onClick={() => handleAdd(1)}>ADD</button>
    </div>
  </div>;
}
