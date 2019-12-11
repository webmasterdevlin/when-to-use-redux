import React from "react";
import HouseBLevel2 from './HouseBLevel2'

export default function HouseBLevel1({age}) {
  return <div style={{width: '60vw', height: '60vh', margin: '2.5rem', background: 'blue'}}>
    <h1>House B - Level 1</h1>
    <HouseBLevel2  age={age}/>
  </div>;
}
