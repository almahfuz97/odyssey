import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider';

export default function Header() {
    // hooks
    const [bgColor, setBgColor] = useState(false);
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);

    // logout function
    const handleLogOut = () => {
        logOut()
            .then(() => { console.log('logged out successfully') })
            .catch((err) => { console.log(err) })
    }

    useEffect(() => {
        location.pathname === '/' ? setBgColor(true) : setBgColor(false);
    }, [location])
    return (
        <div className='relative'>
            <nav className='flex justify-between items-center  absolute w-full px-8 py-4'>
                <div>
                    <h2 className={` ${bgColor ? 'text-white' : 'text-black'} font-bold text-2xl`}>Odyssey</h2>
                </div>
                <div className=' space-x-4 right-0'>
                    <Link to='/' className={`${bgColor ? 'text-white' : 'text-black'} cursor-pointer hover:text-blue-500`}>Home</Link>

                    {
                        user?.uid ?
                            <Link onClick={handleLogOut} to='/' className={`${bgColor ? 'text-white' : 'text-black'} cursor-pointer hover:text-blue-500`}>LogOut</Link>
                            :
                            <Link to='login' className={`${bgColor ? 'text-white' : 'text-black'} cursor-pointer hover:text-blue-500`}>Login</Link>
                    }

                    <Link to='signup' className={`${bgColor ? 'text-white' : 'text-black'} cursor-pointer hover:text-blue-500`}>Sing Up</Link>
                    <Link to='blog' className={`${bgColor ? 'text-white' : 'text-black'} cursor-pointer hover:text-blue-500`}>Blog</Link>
                </div>
            </nav>
        </div>
    )
}
