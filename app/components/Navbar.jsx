
'use client'
import { useState } from "react"
import Link from "next/link"
// import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";


const Navbar = () => {

    const [ menuIcon, setMenuicon] = useState(false);

    const handleMenu = () => {

        setMenuicon( !menuIcon)
    }

  return (
    <header className="bg-slate-400 text-yellow-300 w-full ease-in duration-300 fixed top-0 left-0 z-10">
        <nav className="max-w-[1366px] flex justify-between items-center p-4">
        
        <div>
            <Link href='/'>
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
                <button className="mr-5 bg-sky-500 text-slate-800 hover:text-sky-800 rounded-full uppercase font-bold px-8 py-2">login</button>
                </Link>
                <Link href='/signup'>
                <button className="mr-5 bg-sky-500 text-slate-800 hover:text-sky-800 rounded-full uppercase font-bold px-8 py-2">signup</button>
                </Link>
            </div>

        </div>

        </nav>


    </header>
  )
}

export default Navbar
