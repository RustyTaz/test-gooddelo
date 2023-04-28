import React from 'react'
import main from "../assets/bg-main.jpg"

export default function Home() {
  return (
    <div className='home-container'>
      <img src={main} className='home-img' alt="main" />
    </div>
  )
}
