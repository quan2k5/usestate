import React, { useState } from 'react'

export default function B10() {
    const [arr,setArr]=useState<string[]>([]);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const findItem=arr.find((item)=>{
        return item===e.target.value;
       })
       if(findItem){
        setArr(()=>{
            return arr.filter((item)=>{
                return item!=findItem;
            })
        })
       }else{
        setArr([...arr,e.target.value]);
       }
    }
    const handleCheck=(value:string)=>{
        let find=arr.find((e)=>{
            return value===e;
        })
        if (find){
            return true;
        }
        return false;
    }
  return (
    <div>
       <div>
        <input checked={handleCheck('Bơi lội')} onChange={(e)=>{handleChange(e)}} type="checkbox" value='Bơi lội'  />
        <span>Bơi lội</span>
       </div>
       <div>
        <input checked={handleCheck('Đi chơi')} onChange={handleChange} type="checkbox" value='Đi chơi' />
        <span>Đi Chơi</span>
       </div>
       <div>
        <input checked={handleCheck('Code')} type="checkbox"  onChange={handleChange} value='Code'/>
        <span>Code</span>
       </div> 
       <div>
        <input checked={handleCheck('Nhảy dây')} type="checkbox"  onChange={handleChange} value='Nhảy dây' />
        <span>Nhảy dây</span>
       </div> 
       <ul> 
            <li>Sở thích</li>
            {arr.map((e)=>{
                return <li>{e}</li>
            })}
       </ul>
    </div>
  )
}
