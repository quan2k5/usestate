import React, { useState } from 'react'

export default function B4() {
    const [checked,setChecked]=useState<boolean>(false);
  return (
    <div>
        <button onClick={()=>{setChecked(!checked)}} >{checked?'Ânr':'Hiện'}</button>
        {checked?<div>Tiêu đề văn bản</div>:<></>}
    </div>
  )
}
