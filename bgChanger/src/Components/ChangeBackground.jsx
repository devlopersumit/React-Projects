import React from 'react'
import { useState } from 'react'

function ChangeBackground() {

    const [textColor, setTextColor] = useState("text-white")

  return (
    <div className={`w-full min-h-screen flex items-center justify-center bg-black`}>
        <h1 className={`flex items-center justify-center ${textColor} text-4xl font-bold`}>Sumit Jha, A Passionate Full-Stack Developer</h1>
      <div className='w-auto h-[50px] fixed bottom-14 border-[1px] border-solid border-gray-300 rounded-xl bg-white py-2 pl-9 flex gap-2'>
        <button
        className='bg-red-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-red-500")}
        >
            Red
        </button>

        <button 
        className='bg-blue-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-blue-500")}
        >
            blue
        </button>

        <button 
        className='bg-green-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-green-500")}
        >
            green
        </button>


         <button 
        className='bg-pink-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-pink-500")}
        >
            pink
        </button>



         <button 
        className='bg-yellow-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-yellow-500")}
        >
            yellow
        </button>


         <button 
        className='bg-orange-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-orange-500")}
        >
            orange
        </button>



         <button 
        className='bg-purple-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-purple-500")}
        >
            purple
        </button>

         <button 
        className='bg-grey-500 rounded-lg px-2 py-1 text-white'
        onClick={()=> setTextColor("text-grey-500")}
        >
            grey
        </button>
      </div>
    </div>
  )
}

export default ChangeBackground
