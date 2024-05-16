import React, { useState } from 'react'

export default function B8() {
    const [city,setCity]=useState<string[]>(['ninh bình','hà nội','hải phòng','nghệ an','hà tĩnh']);
    const [checked,setCheck]=useState<string>('');
  return (
    <div>
        <select name="" id="" onChange={(e)=>{setCheck(e.target.value)}}>
            {city.map(function(e){
                return <option value={e}>{e}</option>
            })}
        </select>
        <div>thanhpho cua ban:{checked}</div>
    </div>
  )
}
