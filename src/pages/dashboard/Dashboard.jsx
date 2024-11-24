import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Button from '../component/Button'

function Dashboard() {
  return (
    <>
    {/* Navbar */}
    <Navbar/>

    {/* Hero Section */}
    <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div class="container mx-auto px-6 flex relative py-16">
                <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        Be on
                        <span class="text-5xl sm:text-7xl">
                            Time
                        </span>
                    </h1>
                    <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div class="flex mt-8">
                       <Button title={{name : 'Pushit', address : 'Pokhara'}}/>
                    </div>
                </div>
                <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src="https://www.tailwind-kit.com/images/object/10.png" class="max-w-xs md:max-w-sm m-auto"/>
                </div>
            </div>
        </div>
    </main>

    </>
  )
}

export default Dashboard