"use client"
import Link from 'next/link';
import React from 'react'
import {
  SignInButton,
  UserButton,
  SignedOut,
  SignedIn
} from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className='navbar-wrapper flex justify-center mt-3'>
      <ul className='navbar flex gap-3 '>
        <Link href="/" className={
          pathname === "/" ? "active" : ""
        }>Home</Link>
        <Link href="/product" className={
          pathname === "/product" ? "active" : ""
        }>Products</Link>
        <Link href="/teams" className={
          pathname === "/teams" ? "active" : ""
        }> Teams</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </ul>
    </nav>
  )
}

export default Navigation;