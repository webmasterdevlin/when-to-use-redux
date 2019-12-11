import React from "react";
import HouseALevel3 from './HouseALevel3'

export default function HouseALevel2({add}) {
  const handleAdd = (n) => {
    add(n)
  }
  return <div style={{width: '50vw', height: '50vh',margin: '2.5rem', background: 'red'}}>
    <h1>House A - 2 Level Deep</h1>
    <HouseALevel3 add={handleAdd} />
  </div>;
}
