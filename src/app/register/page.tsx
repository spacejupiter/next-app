'use client'
import React from 'react';
import Link from 'next/link';
import useRegister from './lib/useregister';
import Errormessage from '../login/lib/errormessage';
import { useRouter } from 'next/navigation';


function Register() {
  const [state, handlers, errorValues] = useRegister()
  const router = useRouter()
  const inputStyles = 'outline-none text-black w-[90vw] md:w-[25vw] p-3 rounded-md border-[0.5px] border-gray-200';

  return (
    <div className='font-popins flex flex-col justify-center items-center h-screen bg-white flex font-bold flex-col space-y-8'>
      <p className='text-black text-left font-popinsL text-2xl'>Get started</p>
      <p className='text-gray-400'>Create an account now</p>
      <Errormessage error={errorValues}/>
      <div className='flex flex-col space-y-4'>
        <label className='text-black' htmlFor='fullname'>User Name</label>
        <input onChange={handlers.handleUserNameChange} value={state.userName} id='fullname' className={inputStyles} placeholder='Enter User name' />

        <label className='text-black' htmlFor='email'>Email</label>
        <input onChange={handlers.handleEmailChange} value={state.email} id='email' className={inputStyles} placeholder='Enter email' />

        <label className='text-black' htmlFor='password'>Password</label>
        <input onChange={handlers.handlePasswordChange} value={state.password} type='password' id='password' className={inputStyles} placeholder='Enter password' />

        <label className='text-black' htmlFor='repeatPassword'>Repeat Password</label>
        <input onChange={handlers.handleRepeatPasswordChange} value={state.repeatPassword} type='password' id='repeatPassword' className={inputStyles} placeholder='Repeat password' />
      </div>

      <button onClick={()=>{handlers.handleSubmit(router)} } className='bg-blue-600 text-white px-4 py-4 rounded-lg w-[90vw] md:w-[25vw]'>Sign up</button>
      <p className='text-black'>
        Already registered? <Link href='/login' className='text-blue-700'>Login</Link>
      </p>
    </div>
  );
}

export default Register;
