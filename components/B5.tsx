import React, { useState } from 'react'

export default function B5() {
    const [value,setValue]=useState<string>('');
  return (
    <div>
        <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value} />
        <div>{value}</div>
    </div>
  )
}
