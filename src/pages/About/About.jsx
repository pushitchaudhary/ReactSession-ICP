import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Button from '../component/Button'

function About() {
  const [number , setNumber] = useState(0)

  const add = ()=>{
    setNumber(number + 1)   
  }

  const sub = ()=>{
    setNumber(number + 1)   
  }


  return (
    <> 
    <p>Value is : {number}</p>

    <button onClick={add} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">+</button>
    <button onClick={sub} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">-</button>

    </>
  )
}

export default About