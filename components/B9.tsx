import React, { useState } from 'react'

export default function B9() {
    let [gender,setGender]=useState<string[]>(['Nam','Nữ','Khác']);
    const [check,setCheck]=useState<string>('Nam');
  return (
    <div>
        <div>
            {gender.map((e)=>{
                return <div><input onChange={()=>{setCheck(e)}} checked={check===e} type="radio" /><span>{e}</span></div>
            })}
        </div>
        <div>
            <span>Gioi tinh </span>
            <span>:{check}</span>
        </div>
    </div>
  )
}
