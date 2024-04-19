import React, { useState } from 'react';
import  FormComponent  from '../Components/AddTicketComponent';
import ViewBooked from '../Components/VIewBookedSeat'
const ReservationView = () => {
  const [modalOpen,setModalOpen]=useState(false)
  const handleReserveTicket=()=>{
    setModalOpen(!modalOpen)
  }
 return (
    <div>
      <div className={"flex justify-end px-3"}>
      <button className={"p-3 rounded bg-blue-400 mt-3"} onClick={
         handleReserveTicket
        }> Reserve Ticket</button>
      </div>
      <ViewBooked></ViewBooked>
      <div className='flex items-center justify-center  h-[calc(100vh-100px)]'>
        {modalOpen && 
         <div className="fixed inset-0 z-50 flex justify-center items-center overflow-auto bg-gray-800 bg-opacity-50">
         <FormComponent handleReserveTicket={handleReserveTicket} ></FormComponent>
         </div>
      }
      </div>
    </div>
  );
};

export default ReservationView;
