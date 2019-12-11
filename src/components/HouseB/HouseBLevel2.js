import React from "react";
import HouseBLevel3 from './HouseBLevel3'

export default function HouseBLevel2({age}) {
  return <div style={{width: '30vw', height: '30vh', margin: '2.5rem', background: 'green'}}>
    <h1>House B - Level 2</h1>
    <HouseBLevel3 age={age} />
  </div>;
}
