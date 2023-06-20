import React from 'react';
import logo from '../../img/Logo.png'
import account from '../../img/account.png'
import love from '../../img/love Icon (1).png'
import cart from '../../img/cart Icon.png'
import option from '../../img/Option.png'
import search from '../../img/NavBar_Search_Icon 1.png'

const Header = () => {
    return (
      <div>
        <div className="navbar bg-[#1E66FF]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div>
              <input
                type="text"
                placeholder="Search"
                className="input-sm input-bordered rounded-full w-full md:w-[500px]"
              />
              <button type="submit" className="btn-sm absolute rounded-full w-16 ms-[-42px] bg-sky-400"><img className='mx-auto' src={search} alt="" /></button>
              
            </div>
              </ul>
            </div>
            <a className="md:ms-20">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="input-sm input-bordered rounded-full w-full md:w-[500px]"
              />
              <button type="submit" className="btn-sm  rounded-full absolute w-16 ms-[-42px] bg-indigo-200 z-40 "><img className='mx-auto' src={search} alt="" /></button>
              
            </div>
          </div>
          <div className="navbar-end">
            <div className='flex'>
                <img className='h-4 mt-1' src={account} alt="" />
                <span className='text-white ms-2'>Account</span>
            </div>
            <div className='flex ms-5'>
                <img className='h-4  mt-1' src={love} alt="" />
                <span className='text-white ms-2'>My Items</span>
            </div>
            <div className='ms-5'>
                <img src={cart} alt="" />
            </div>
            <div className='ms-10 md:me-20'>
                <img src={option} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;