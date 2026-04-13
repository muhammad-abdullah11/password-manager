import { useState } from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-10 border-b border-b-gray-300 shadow-xl flex items-center justify-between px-4 py-2'>
        <h1 className='text-2xl font-bold font-mono'>Password Manager</h1>

        <div>

        </div>
        <div className='items-center hidden md:flex'>
            <button className='bg-emerald-500 text-white font-bold px-2 py-1.5 rounded-lg hover:bg-emerald-700'>Login</button>
            <button className='ml-2 bg-gray-200 text-gray-800 font-bold px-2 py-2 rounded-lg hover:bg-gray-300'>Sign Up</button>
             </div>
         <button className='ml-4 md:hidden focus:outline-none' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {!isMenuOpen ? (
                <IoReorderThreeOutline className='text-2xl' onClick={() => setIsMenuOpen(false)} />
            ) : (
                <RxCross2 className='text-2xl' onClick={() => setIsMenuOpen(true)} />
            )}
            </button>   

            {isMenuOpen && (
                <div className='absolute w-full top-16 right-4 bg-white shadow-lg rounded-lg p-4 md:hidden flex flex-col items-center space-y-2'>
                    <button className='w-full bg-emerald-500 text-white font-bold px-2 py-1.5 rounded-lg hover:bg-emerald-700'>Login</button>
                    <button className='w-full ml-2 bg-gray-200 text-gray-800 font-bold px-2 py-2 rounded-lg hover:bg-gray-300'>Sign Up</button>
                </div>
            )}

    </header>
  )
}

export default Header