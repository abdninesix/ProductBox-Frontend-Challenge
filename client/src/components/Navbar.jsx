import React, { useEffect, useState } from 'react'
import { navLinks } from '../lib/constants'
import { Link } from 'react-router-dom'
import Button from './Button';
import { getCartItems } from '../lib/Cart';

const NavBar = () => {

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCartItems();
      setCartCount(cart.length); // Show number of unique items only
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount); // Update on localStorage changes

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <div className='sticky top-0 z-20 w-full backdrop-blur-md flex justify-between items-center px-8 py-2 select-none'>

      <Link to="/" className='text-xl font-bold flex'><p>Rando</p><p className='text-blue-500'>Store</p></Link>

      <div className='flex gap-10 max-md:hidden'>
        {navLinks.map((link) => (
          <Button to={link.url} key={link.label}><p>{link.label}</p></Button>
        ))}
      </div>

      <Link to="/checkout" className='flex items-center justify-center hover:bg-black p-2 rounded-md text-xl'>🛒
        {cartCount > 0 && (
          <div className='relative'>
            <div className='absolute flex items-center justify-center size-5 top-2 -right-2 bg-red-600 text-white text-xs p-1 rounded-full'>
              {cartCount}
            </div>
          </div>
        )}
      </Link>

      <div className='relative flex gap-4 items-center md:hidden'>
        <div onClick={() => setDropdownMenu(!dropdownMenu)} className='p-2 text-2xl cursor-pointer'>☰</div>
        {dropdownMenu && (
          <div className='absolute w-28 top-10 right-6 flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg'>
            {navLinks.map((link) => (
              <Link to={link.url} key={link.label}><p>{link.label}</p></Link>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default NavBar