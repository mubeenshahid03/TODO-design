import React from 'react'
import Subtract from '../Plan/Subtract.png'
function EndCard() {
  return (
    <div className='h-[600px] z-10 bg-white   w-[374px] py-[10px]   rounded-r-[20px]  rounded-b-[20px]'>
    {/* header */}
    <div className='h-[180px] w-[210px]  my-[35px] mx-[82px] flex items-center  justify-center flex-col'>
    <p className="text-[30px] font-semibold  text-[#333333]">
          Business
        </p>
        <p className="text-[#A6A6A6] px-4 text-center">
        Unveil new superpowers and join the Design Leaque           </p>
        <div className='relative  w-[70px] flex items-center justify-center mt-4'>
            <p className='font-semibold text-[50px]'>
             16
            </p>
            <p className='absolute top-0 left-0 font-bold text-gray-500 '>$</p>
            </div>
    </div>
{/* list */}
<div className='h-[220px] m-auto w-[238px] flex flex-col justify-between  mt-4'>
<div className="h-30  flex items-center ">
          <span className="h-30">
          <img className='h-[26px] w-[26px]' src={Subtract} alt='subtract' />
          </span>
          <p className="h-30 ml-6">All the features of pro plan</p>
        </div>

        <div className="h-30  flex items-center ">
          <span className="h-30">
          <img className='h-[26px] w-[26px]' src={Subtract} alt='subtract' />
          </span>
          <p className="h-30 ml-6">Account success Manager</p>
        </div>

        <div className="h-30  flex items-center ">
          <span className="h-30">
          <img className='h-[26px] w-[26px]' src={Subtract} alt='subtract' />
          </span>
          <p className="h-30 ml-6">Single Sign-On (SSO)</p>
        </div>

        <div className="h-30  flex items-center ">
          <span className="h-30">
          <img className='h-[26px] w-[26px]' src={Subtract} alt='subtract' />
          </span>
          <p className="h-30 ml-6">Co-conception pogram</p>
        </div>

        <div className="h-30  flex items-center ">
          <span className="h-30">
          <img className='h-[26px] w-[26px]' src={Subtract} alt='subtract' />
          </span>
          <p className="h-30 ml-6">Collaboration-Soon</p>
        </div>

</div>
{/* button */}
<div className='h-auto w-full flex items-center justify-center'>
<button className="text-[16px] my-[35px] font-semibold h-[55px] w-[260px] ml-[4px]  bg-[#3585FF] text-white rounded-md px-8 ">
            Goto Business
          </button>
</div>
    </div>
  )
}

export default EndCard