
import React, { useState, useEffect } from 'react';
import UpdateTicket from '../Components/UpdateTicket'
const Dashboard = () => {
  const [passengers, setPassengers] = useState([]);
  const [updatePassengersData,setUpdatePassengersData]=useState({
    firstName: "",
    lastName: "",
    email: "",
    seatNumber: 0,
    date: ""
  })
  const [modalOpen,setModalOpen]=useState(false)
  useEffect(() => {
   
    fetchData()
  }, []);
   const fetchData=()=>{
    const savedPassengers = JSON.parse(localStorage.getItem('bookedSeats'));
    if (savedPassengers) {
      setPassengers(savedPassengers);
    }
   }

  const handleEdit = (updatedInfo) => {
    setUpdatePassengersData({
      firstName: updatedInfo?.firstName,
      lastName: updatedInfo?.lastName,
      email: updatedInfo?.email,
      seatNumber: updatedInfo?.seatNumber,
      date: updatedInfo?.date
    })
    setModalOpen(true)
  };
  const handleDelete = (index) => {
    const UpdateBookedSeats = [...passengers];
    UpdateBookedSeats.splice(index, 1);
    setPassengers(UpdateBookedSeats); 
    alert("Delete Seat Successfully....")
    localStorage.setItem('bookedSeats', JSON.stringify(UpdateBookedSeats));
  };
  const ClosedModal=()=>{
    setModalOpen(false)
    fetchData()
  }

  return (
    
 <div class="flex flex-col">
 {modalOpen && 
  <div className="fixed inset-0 z-50 flex justify-center items-center overflow-auto bg-gray-800 bg-opacity-50">
 <UpdateTicket ClosedModal={ClosedModal} firstName={updatePassengersData?.firstName} lastName={updatePassengersData?.lastName} email={updatePassengersData?.email} seatNumber={updatePassengersData?.seatNumber} date={updatePassengersData?.date}  ></UpdateTicket>
  </div>
}
  <div class="overflow-x-auto">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Emails</th>
              <th scope="col" class="px-6 py-4">Seat Number</th>
              <th scope="col" class="px-6 py-4">Date of Booking</th>
              <th scope="col" class="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
          {passengers.map((passenger, index) => (
            <tr key={index}  class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <td class="whitespace-nowrap px-6 py-4">{passenger?.firstName} {passenger?.lastName}</td>
              <td class="whitespace-nowrap px-6 py-4">{passenger?.email}</td>
              <td class="whitespace-nowrap px-6 py-4">{passenger?.seatNumber}</td>
              <td class="whitespace-nowrap px-6 py-4">{passenger?.date}</td>
              <td class={'space-x-2'}>
                <button onClick={() => handleEdit(passenger)}>Edit</button> 
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
             </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
