import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="upper flex flex-row bg-slate-900 border-b-2 border-slate-400 justify-evenly text-purple-100">
        <div className='mx-3 w-1/3'><h2 className='font-bold text-lg'>About</h2>
          <p className='text-sm py-3.5'>eLibra is your go-to platform for reading, renting, and purchasing books online. With an extensive digital collection and flexible options, we cater to all your reading needs. Explore, discover, and enjoy the world of books with eLibra.</p>
        </div>
        <div className='w-1/3'><h2 className='font-bold text-lg'>Social Media</h2>
          <ul className='my-3 text-sm'>
            <li className='py-1'>Facebook</li>
            <li className='py-1'>Instagram</li>
            <li className='py-1'>X</li>
            <li className='py-1'>Linkedin</li>
          </ul>

        </div>
        <div className='mx-3 w-1/3'><h2 className='font-bold text-lg'>Map</h2>
          <div className='py-4'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29453.45954091102!2d88.43427840000001!3d22.6656256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716122690340!5m2!1sen!2sin" ></iframe></div>
        </div>
      </div>
      <div className="foot text-center">Copyright &copy; eLibra | All rights reserved</div>
    </div>
  )
}

export default Footer