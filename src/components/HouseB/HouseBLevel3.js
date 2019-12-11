import React from "react";
import HouseBLevel4 from './HouseBLevel4'

export default function HouseBLevel2({age}) {
  return <div style={{width: '40vw', height: '40vh', margin: '2.5rem', background: 'blue'}}>
    <h1>House B - 2 Level Deep</h1>
    <HouseBLevel4 age={age} />
  </div>;
}
