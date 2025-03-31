import Link from 'next/link';
import React from 'react'

const Navigation = () => {
  return (
    <nav className='navbar-wrapper flex justify-center mt-3'>
        <ul className='navbar flex gap-3 '>
            <Link href="/">Home</Link>
            <Link href="/product">Products</Link>
            <Link href="/teams"> Teams</Link>
        </ul>
    </nav>
  )
}

export default Navigation;