import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {updateText} from "../../store/house/house-actions";

export default function HouseBLevel3({age}) {
  const dispatch = useDispatch();
  const {text} = useSelector(state => state.houseReducer)
  return <div style={{width: '15vw', height: '15vh', margin: '2.5rem', background: 'grey'}}>
    <h1>House B - Level 3 : {text}</h1>
    <h2>{age}</h2>
    <button onClick={() => dispatch(updateText("Devlin's here again!"))}>Appear</button>
  </div>;
}
