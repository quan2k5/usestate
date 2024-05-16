import React, { useState } from 'react'

export default function B6() {
    const [number,setNumber]=useState<number>(0);

  return (
    <div>
        <h4>Bạn đã click {number} lần</h4>
        <button onClick={()=>{setNumber(number+1)}}>Click</button>
        <br></br>
    </div>
  )
}
