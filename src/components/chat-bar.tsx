'use client'
import { ArrowUp } from 'lucide-react'
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'

const ChatBar = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full z-50 fixed bottom-6'>
      <div className='bg-transparent backdrop-blur-md rounded-4xl w-11/12 md:w-3/4 flex flex-col items-center justify-center p-4 shadow-xl'>
        <form className='flex flex-row items-center justify-between w-full'>
          <TextareaAutosize maxRows={5} placeholder='Ask anything' className='text-neutral-950 focus-visible:outline-none w-full text-wrap resize-none text-2xl md:text-lg'></TextareaAutosize>
          <button type='submit' className='rounded-full bg-radial from-blue-400 from-15% via-blue-200 to-transparent to-70% text-white p-4 ml-4 cursor-pointer'><ArrowUp/></button>
        </form>
      </div>
    </div>
  )
}

export default ChatBar