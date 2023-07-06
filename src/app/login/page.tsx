'use client'
import React from 'react';
import Image from 'next/image';
import useLogin from './lib/useLogin';
import Link from 'next/link';
import Errormessage from './lib/errormessage';
import { useRouter } from 'next/navigation'
function Login() {
    const [loginValues, loginHandlers,errorValues] = useLogin();
    const router = useRouter();
  return (
    <div className="font-popins flex justify-center items-center text-left h-screen bg-white flex font-bold flex-col space-y-8">
      <Errormessage error={errorValues} />
      <div className="text-center flex flex-col space-y-4">
        <p className="text-black font-bold font-popinsL text-2xl">Sign in</p>
        <p className="text-gray-400 text-sm">You must sign in to join the community of engagers</p>
        <div className="flex flex-col space-y-2 text-black">
          <div className="py-4 rounded-xl border-[0.4px] border flex pl-14 flex-row text-center space-x-4">
            <Image height={25} width={25} className="" alt="google icon" src="/google.svg" />
            <p>Sign in with Google</p>
          </div>
          <div className="py-4 rounded-xl border-[0.4px] border flex pl-14 flex-row text-center space-x-4">
            <Image height={25} width={25} className="" alt="google icon" src="/facebook.svg" />
            <Link href={'http://localhost:4700/api/login/facebook'}>Sign in with Facebook</Link>
          </div>
          <p>or</p>
        </div>

        <div className="flex flex-col space-y-3 justify-center items-center">
          
          <input
            placeholder='enter username or email'
            id={'2'}
            value={loginValues.username}
            onChange={loginHandlers.handleUsername}
            className="lg:w-[25vw] outline-none w-[90vw] text-placeholder-xs text-black w-70 rounded-md p-3 border-[0.5px] border-gray-300"
          />
         
          <input
            type={'password'}
            placeholder='enter passowrd'
            id={'1'}
            value={loginValues.password}
            onChange={loginHandlers.handlePassword}
            className="outline-none text-black lg:w-[25vw] w-[90vw] p-3 rounded-md border-[0.5px] border-gray-200"
          />
        </div>
              <button onClick={ ()=>{loginHandlers.handleSubmit(router)} } className="bg-blue-600 text-white px-4 py-4 rounded-lg">Sign in</button>
      </div>
      <p  className="text-black">
        Not yet registered? <Link href={'/register'} className="text-blue-700">Create one</Link>
      </p>
    </div>
  );
}

export default Login;
