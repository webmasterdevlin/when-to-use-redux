import React from 'react';
import HouseALevel4 from './HouseALevel4'

export default function HouseALevel3({add}) {

  const handleAdd = (n) => {
    add(n);
  };

  return <div style={{width: '40vw', height: '40vh', margin: '2.5rem', background: 'orange'}}>
    <h1>House A - 3 Level Deep : </h1>
    <HouseALevel4 add={handleAdd} />
  </div>;
}
