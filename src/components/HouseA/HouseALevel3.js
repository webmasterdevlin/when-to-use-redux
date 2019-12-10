import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {updateText} from "../../store/house/house-actions";


export default function HouseALevel3() {
  const dispatch = useDispatch();
  const {text} = useSelector(state => state.houseReducer)
  return <div style={{width: '15vw', height: '15vh', margin: '2.5rem', background: 'yellow'}}>
    <h1>House A - Level 3 : {text}</h1>
    <button onClick={() => dispatch(updateText('Gone!'))}>Banish</button>
  </div>;
}
