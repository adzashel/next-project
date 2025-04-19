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


const link = [
  {

    name: "Home",
    href: "/"
  },
  {
    name: "Products",
    href: "/product"
  },
  {
    name: "Teams",
    href: "/teams"
  }
]

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className='navbar-wrapper flex justify-center mt-3'>
      <ul className="navbar flex gap-3">
      {link.map((item , i) => (
        <Link href={item.href} key={ i } className={
          pathname === `${item.name}` ? "active" : ""
        }>{item.name}</Link>
        
      
    ))}
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
