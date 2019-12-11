import React from "react";
import HouseALevel2 from './HouseALevel2'

export default function HouseALevel1({add}) {
  const handleAdd = (n) => {
    add(n)
  }
  return <div style={{width: '60vw', height: '60vh', background: 'maroon'}}>
    <h1>House A - 1 Level Deep</h1>
    <HouseALevel2 add={handleAdd} />
  </div>;
}
