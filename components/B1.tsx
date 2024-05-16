import React, { useState } from 'react'

export default function B1() {
    const[name,setName]=useState<string>('Lê anh quân')
  return (
    <div>{name}</div>
  )
}
