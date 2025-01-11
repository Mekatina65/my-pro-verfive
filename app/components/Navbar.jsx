
'use client'
import { useState } from "react"
import Link from "next/link"
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

    const [ menuIcon, setMenuicon] = useState(false);

    const handleMenu = () => {

        setMenuicon( !menuIcon)
    }

  return (
    <header className="bg-slate-400 text-yellow-300 w-full ease-in duration-300 fixed top-0 left-0 z-10">
        <nav className="max-w-[1366px] flex justify-between items-center p-4">
        
        <div>
            <Link href='/'  onClick={handleMenu} >
            <span className="font-bold text-3xl md:text-2xl xl:text-3xl uppercase">javascript</span>
            </Link>
        </div>

        <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-slate-800">
            <li className="mr-4 lg:mr-8 hover:text-teal-700">
                <Link href='/'>home</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-teal-700">
                <Link href='/contact'>contact</Link>
            </li>
            <li className="mr-4 lg:mr-8 hover:text-teal-700">
                <Link href='/about'>about</Link>
            </li>
        </ul>

        <div className="hidden md:flex">
            <div className="flex">
                <Link href='/login'>
                <button className=" bg-sky-500 text-slate-800 hover:text-sky-800 rounded-full uppercase font-bold px-8 py-2">login</button>
                </Link>
                <Link href='/signup'>
                <button className="mr-5 bg-sky-500 text-slate-800 hover:text-sky-800 rounded-full uppercase font-bold px-8 py-2">signup</button>
                </Link>
            </div>

        </div>

        <div  onClick={handleMenu} className="flex md:hidden">
            {menuIcon ? 
            (<AiOutlineClose size={25} className="text-yellow-600"/>)             
             
            : 
            ( <AiOutlineMenu size={25} className="text-yellow-600"/>) }

        </div>

        <div className={menuIcon ?
            'md:hidden absolute top-[72px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-gray-300 text-gray-600 text-center ease-in duration-300'
            :
            'md:hidden absolute top-[72px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-gray-300 text-gray-600 text-center ease-in duration-300'
        }>

            <div className="w-full">
                <ul className="uppercase font-bold text-2xl">
                    <li onClick={handleMenu} className="py-5 hover:text-green-600 cursor-pointer" >
                        <Link href='/'>home</Link>
                    </li>
                    <li onClick={handleMenu} className="py-5 hover:text-green-600 cursor-pointer" >
                        <Link href='/contact'>contact</Link>
                    </li>
                    <li onClick={handleMenu} className="py-5 hover:text-green-600 cursor-pointer" >
                        <Link href='/about'>about</Link>
                    </li>
                </ul>

                <div className="flex flex-col justify-center items-center mt-16">
                    <Link href='/login' onClick={handleMenu}>
                    <button className="bg-teal-600 text-green-400 rounded-full uppercase font-bold py-3 w-[250px] mb-0.5">login</button>
                    </Link>
                    <Link href='/signup' onClick={handleMenu}>
                    <button className="bg-teal-600 text-green-400 rounded-full uppercase font-bold py-3 w-[250px] mb-0.5">signup</button>
                    </Link>
                </div>
            </div>

        </div>
        </nav>


    </header>
  )
}

export default Navbar
