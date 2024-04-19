// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import LinkComponent from '../Components/LinkComponent';

function NavigationBar() {
  return (
    <nav className='flex flex-col lg:flex-row bg-blue-500 shadow-xl px-10 py-4 lg:items-end lg:justify-between'>
      <div className={"sm:mt-2 md:mt-0"}>
        <h1 className='font-bold text-2xl'>Wellcome to Ticket Booking App</h1>
      </div>
      <ul className='flex space-x-5 mr-2 mt-4 lg:mt-0'>
        <li>
          <LinkComponent to="/" name={"Reservation"} className={"bg-black p-3 rounded-full text-white hover:bg-white hover:text-black"}>
            Reservation
          </LinkComponent>
        </li>
        <li>
          <LinkComponent to="/dashboard" name={"Dashboard"}  className={"bg-black p-3 rounded-full text-white hover:bg-white hover:text-black"}></LinkComponent>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
