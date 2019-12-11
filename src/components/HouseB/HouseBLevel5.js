import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {updateText} from "../../store/house/house-actions";

export default function HouseBLevel5({age}) {
  const dispatch = useDispatch();
  const {text} = useSelector(state => state.houseReducer)
  return <div style={{width: '20vw', height: '20vh', margin: '2.5rem', background: 'green'}}>
    <h1>House B - 5 Level Deep</h1>
    <h2>{text}</h2>
    <h2>Age: {age}</h2>
    <button onClick={() => dispatch(updateText("Batman"))}>HERO MODE</button>
  </div>;
}
