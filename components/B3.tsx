import React, { useState } from 'react'

export default function () {
    const [check,setCheck]=useState<boolean>(false);
  return (
    <div>
        <h5 style={ check?{color:'red'}:{color:'black'}}>Tiêu đề văn bản</h5>
        <button onClick={()=>{setCheck(!check)}}>Đổi màu</button>
    </div>
  )
}
