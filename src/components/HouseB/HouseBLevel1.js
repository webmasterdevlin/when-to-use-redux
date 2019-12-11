import React from "react";
import HouseBLevel2 from './HouseBLevel2'

export default function HouseBLevel1({age}) {
  return <div style={{width: '60vw', height: '60vh', background: 'violet'}}>
    <h1>House B - 1 Level Deep</h1>
    <HouseBLevel2  age={age}/>
  </div>;
}
