import React, { useState } from 'react'
interface Product{
    id:number,
    name:string,
    price:number,
    quantity:number,
}
export default function B2() {
    const [item,setItem]=useState<Product>({
        id:1,
        name:'coca cola',
        price:12000,
        quantity:6,
    })
  return (
    <div>
        <div>ID:{item.id}</div>
        <div>Name:{item.name}</div>
        <div>Price:{item.price}</div>
        <div>Quantity:{item.quantity}</div>
    </div>
  )
}
