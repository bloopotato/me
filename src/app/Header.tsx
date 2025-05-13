import React from 'react'
import Navbar from '@/components/Navbar'
import Toggle from '@/components/Toggle'

const Header = () => {
  return (
    <div className='flex fixed z-10 w-full justify-center gap-[20px] px-[50px] mt-[20px]'>
      <Navbar/>
      <Toggle/>
    </div>
  )
}

export default Header
