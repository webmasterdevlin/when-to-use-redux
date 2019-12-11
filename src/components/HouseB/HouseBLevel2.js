import React from "react";
import HouseBLevel3 from './HouseBLevel3'

export default function HouseBLevel2({age}) {
  return <div style={{width: '50vw', height: '50vh', margin: '2.5rem', background: 'purple'}}>
    <h1>House B - 2 Level Deep</h1>
    <HouseBLevel3 age={age} />
  </div>;
}
