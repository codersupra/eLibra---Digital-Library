import React from 'react'
import { VscAccount} from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import logo from './logo.png'

const Navbar = () => {
  return (
    <div>
        <div className="upper bg-slate-200 border-b-2 border-slate-400">
            <ul className='flex  justify-between mx-4  border-1 border-purple-400 bg-slate-200 py-3'>
                <li><img src={logo} alt="" width={60}/></li>
                <li><input type="search" placeholder='Search' className='shadow-md rounded-xl w-96 px-3 py-1 outline-none bg-slate-100'/><button className='relative top-1'><CiSearch size={22} /></button></li>
                <li className='border-black hover:bg-slate-100 rounded-full duration-150'><VscAccount size={30} /></li>
            </ul>
            <ul className='flex gap-16 justify-center mx-4 border-1 border-purple-400 bg-slate-200 mt-2'>
                <li className='hover:bg-slate-400 rounded-t-md duration-150 px-1 cursor-pointer'>Home</li>
                <li className='hover:bg-slate-400 rounded-t-md duration-150 px-1 cursor-pointer'>Explore</li>
                <li className='hover:bg-slate-400 rounded-t-md duration-150 px-1 cursor-pointer'>Store</li>
                <li className='hover:bg-slate-400 rounded-t-md duration-150 px-1 cursor-pointer'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar