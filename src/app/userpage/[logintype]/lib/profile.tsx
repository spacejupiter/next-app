'use client'
import React, { useState } from 'react';
import Image from 'next/image';


interface ProfileProps {
  username?: string;
  email?: string;
  dateJoined?: string;
}

function Profile(props: ProfileProps) {
  const [actionButtons, setActionButtons] = useState([
    { iconSrc: '/prfl.svg', label: 'Follow' },
    { iconSrc: '/msg.svg', label: 'Message' },
    { iconSrc: '/more.svg', label: 'More' },
  ]);

  return (
    <div className='flex flex-col w-full text-center items-center shadow-xl bg-white rounded-lg px-4  '>
      <div className='fixed top-0 bg-blue-700 w-full h-32 mx-4 z-0'></div>
      <div className='w-32 h-32 rounded-full overflow-hidden z-10 xl:mt-4 '>
        <Image
          className='object-cover '
          width={400}
          height={400}
          alt=''
          src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        />
      </div>

      <p className='text-gray-400 text-black'>{`${props.username}`}</p>
      <p className='text-2xl text-black font-bold'>{ props.email}</p>
      <div className='flex flex-row space-x-8'>
        <p className='text-blue-400'>location</p>
        <p className='text-gray-400'>Joined March 2013</p>
      </div>
      <div className='flex w-full mx-44 items-center justify-center text-center flex-row space-x-4 border border-gray-200 rounded-lg p-4 text-black'>
        {actionButtons.map((button, index) => (
          <ActionButton key={index} iconSrc={button.iconSrc} label={button.label} />
        ))}
      </div>
      <div className='text-black h-44'>
        <p className='text-center whitespace-wrap md:text-sm text-xs mt-4' >
          CEO Zoro.uk, Because your lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur
        </p>
      </div>
    </div>
  );
}

function ActionButton({ iconSrc, label }: { iconSrc: string; label: string }) {
  return (
    <div className='flex flex-row space-x-2 border border-gray-200 rounded-lg md:px-6 px-2 py-2 '>
      <Image className='rounded-[50%]' alt='' src={iconSrc} width={20} height={20} />
      <p>{label}</p>
    </div>
  );
}

export default Profile;
