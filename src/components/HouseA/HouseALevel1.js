import React from "react";
import HouseALevel2 from './HouseALevel2'

export default function HouseALevel1({passFromGrandParent}) {
  const handlePassFromParent = (value) => {
    passFromGrandParent(value)
  }
  return <div style={{width: '60vw', height: '60vh', margin: '2.5rem', background: 'red'}}>
    <h1>House A - Level 1</h1>
    <HouseALevel2 passFromParent={handlePassFromParent} />
  </div>;
}
