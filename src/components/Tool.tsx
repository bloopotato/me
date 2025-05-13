import React from 'react'

interface ToolProps {
    text: string;
}

const Tool = ({ text }: ToolProps) => {
  return (
    <div className='px-[10px] py-[5px] bg-colour1 rounded-full'>
      <p className='text-[14px] text-background'>{text}</p>
    </div>
  )
}

export default Tool
