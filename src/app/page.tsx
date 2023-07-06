'use client'
import Image from 'next/image';
import ProtectedUser from './userpage/[logintype]/page'
export default function Home() {
  return (
    <ProtectedUser />
  )
}
