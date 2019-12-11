import React from "react";
import HouseALevel5 from './HouseALevel5'

export default function HouseALevel2({add}) {

  const handleAdd = (n) => {
    add(n);
  };

  return <div style={{width: '30vw', height: '30vh',margin: '2.5rem', background: 'gold'}}>
    <h1>House A - 4 Level Deep</h1>
    <HouseALevel5 add={handleAdd} />
  </div>;
}
