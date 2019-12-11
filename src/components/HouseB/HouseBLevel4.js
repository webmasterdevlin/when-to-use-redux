import React from "react";
import HouseBLevel5 from './HouseBLevel5'

export default function HouseBLevel2({age}) {
  return <div style={{width: '30vw', height: '30vh', margin: '2.5rem', background: 'lightblue'}}>
    <h1>House B - 4 Level Deep</h1>
    <HouseBLevel5 age={age} />
  </div>;
}
