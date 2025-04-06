
import Link from 'next/link';
import React from 'react'
import {
  SignInButton,
  UserButton,
  SignedOut,
  SignedIn
} from '@clerk/nextjs';

const Navigation = () => {
  return (
    <nav className='navbar-wrapper flex justify-center mt-3'>
      <ul className='navbar flex gap-3 '>
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/teams"> Teams</Link>
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