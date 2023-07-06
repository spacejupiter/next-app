import React from 'react'
import Image from 'next/image'
function Info() {
  return (
      <div className='flex flex-col w-full text-left items-left shadow-xl bg-white rounded-lg px-8 space-y-8 py-4' >
          <p className='text-black text-3xl font-bold'>Information</p>
         <div className='flex flex-row '>
              <div className='mr-auto flex flex-row space-x-4'> <Image height={32} width={32} alt='' src={'/ph.svg'} className='' />  
              <p className='text-gray-400'>Phone</p></div>
             
              <p className='text-black ml-auto'>+44 77000 000 000</p>
          </div>
          <div className='flex flex-row '>
              <div className='mr-auto flex flex-row space-x-4'> <Image height={32} width={32} alt='' src={'/email.svg'} className='' />  
              <p className='text-gray-400'>email</p></div>
             
              <p className='text-black ml-auto'>aslem400@yaa.com</p>
          </div>
          <div className='flex flex-row '>
              <div className='mr-auto flex flex-row space-x-4'> <Image height={32} width={32} alt='' src={'/website.svg'} className='' />  
              <p className='text-gray-400'>Website</p></div>
             
              <p className='text-black ml-auto'>www.example.com</p>
          </div>
         <div className='flex flex-row '>
              <div className='mr-auto flex flex-row space-x-4'> <Image height={32} width={32} alt='' src={'/calendar.svg'} className='' />  
              <p className='text-gray-400'>Joined</p></div>
             
              <p className='text-black ml-auto'>March 2013</p>
          </div>
    </div>
  )
}

export default Info
