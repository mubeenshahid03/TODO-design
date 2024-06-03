import React from 'react'
import unsplash from './g141.png'
import notion from './g142.png'
import intercom from './g143.png'
import descript from  './g144.png'
import grammerly from './g145.png'
function Company() {
  return (
    <>
    <div className='w-[1100px] h-[80px] m-auto my-[37px] flex items-center justify-between'>
        <img className='h-[28px] w-[130px]' src={unsplash} alt='g141' />
        <img className='h-[28px] w-[115px]' src={notion} alt='g142' />
        <img className='h-[28px] w-[150px]' src={intercom} alt='g143' />
        <img className='h-[28px] w-[130px]' src={descript} alt='g144' />
        <img className='h-[28px] w-[150px]' src={grammerly} alt='g145' />
        </div>

    </>
  )
}

export default Company