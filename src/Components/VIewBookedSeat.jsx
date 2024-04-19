import React,{useState,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const ViewBookedSeat=()=>{
    const [selectedDate,setSelectedDate]=useState(new Date())
    const [passengers, setPassengers] = useState([]);
    useEffect(()=>{
         fetchData()
    },[])
    const fetchData=()=>{
        const savedPassengers = JSON.parse(localStorage.getItem('bookedSeats'));
        console.log("saved passengers",savedPassengers)
        if (savedPassengers) {
          const checkSelectedSeatAvailable=savedPassengers?.filter((element)=>new Date(element?.date)?.toLocaleDateString('en-GB')==new Date()?.toLocaleDateString('en-GB') )
          const newArr=checkSelectedSeatAvailable?.map((value)=>{
            return value?.seatNumber
            }) 
            setPassengers(newArr || []);
        }
        else{
          setPassengers([])
        }
    }
    const handleCheck=()=>{
        const savedPassengers = JSON.parse(localStorage.getItem('bookedSeats'));
        const checkSelectedSeatAvailable=savedPassengers?.filter((element)=>new Date(element?.date)?.toLocaleDateString('en-GB')==  selectedDate.toLocaleDateString('en-GB'))
        const newArr=checkSelectedSeatAvailable?.map((value)=>{
            return value?.seatNumber
        })
        setPassengers(newArr || []);
    }
    const checkSeatBooked=(seat)=>{
        const value=passengers?.includes(seat)
        return value ? true : false
    }
  return(
    <div >

     <div className={"flex flex-col w-full h-[calc(100vh-100px)] space-y-3 items-center justify-center"}>
     <div  className={"flex flex-col lg:flex-row mt-40 lg:mt-0 w-[50%] justify-between"}>
        <div className={' flex flex-col lg:flex-row '}>
            <DatePicker
                  selected={selectedDate}
                  name={"date"}
                  default={"Please Select Date"}
                  className={"w-full outline-none border-2 py-3 rounded"}
                  onChange={(date) => {
                    setSelectedDate(date)
                  }}
                  minDate={new Date()}
                />
                 <button onClick={()=>handleCheck()} className={"bg-blue-500 p-3 rounded"} >Check</button>
        </div>
        <div>
            <p>Identification </p>
            <div className={"flex space-x-3"}>
            <p className={"text-red-500"}>booeked</p>
            <p className={"text-gray-500"}>not booked</p>
            </div>
        </div>
        </div>
        <div>Lower Deck</div>
        <div className={"Lower Deck flex md:w-[70%] lg:w-[50%] h-[40%] bg-white border-2 shadow-xl"}>
            
            <div className={"driverseat w-[10%] border-r-4"}>     
            </div>
            <div className={"driverseat w-[80%] border-r-4"}>   
            <div class="grid grid-cols-5 gap-4 mt-2 px-2">
            <div class={`${checkSeatBooked(1) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">1</span>
            </div>
            <div class={`${checkSeatBooked(2) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">2</span>
            </div>
            <div class={`${checkSeatBooked(3) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">3</span>
            </div>
            <div class={`${checkSeatBooked(4) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">4</span>
            </div>
            <div class={`${checkSeatBooked(5) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">5</span>
            </div>
            <div class={`${checkSeatBooked(6) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">6</span>
            </div>
            <div class={`${checkSeatBooked(7) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">7</span>
            </div>
            <div class={`${checkSeatBooked(8) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">8</span>
            </div>
            <div class={`${checkSeatBooked(9) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">9</span>
            </div>
            <div class={`${checkSeatBooked(10) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">10</span>
            </div>  
            </div>
            <div class="grid grid-cols-5 gap-4 mt-4 lg:mt-10 px-2">
            <div class={`${checkSeatBooked(11) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">11</span>
            </div>
            <div class={`${checkSeatBooked(12) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">12</span>
            </div>
            <div class={`${checkSeatBooked(13) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">13</span>
            </div>
            <div class={`${checkSeatBooked(14) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">14</span>
            </div>
            <div class={`${checkSeatBooked(15) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">15</span>
            </div> 
            </div>
            </div>
            <div className={"driverseat w-[10%]"}>
            <div class="grid grid-rows-5 gap-4 mt-2 ">
            <div class={`${checkSeatBooked(17) ? "bg-red-300" : "bg-gray-200"} py-4 lg:py-8 w-[80%] flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">17</span>
            </div>
            <div class={`${checkSeatBooked(16) ? "bg-red-300" : "bg-gray-200"} py-4 lg:py-8 w-[80%] flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">16</span>
            </div>        
            </div>
            </div>
        </div>
        <div>Upper Deck</div>
        <div className={"Lower Deck flex md:w-[70%] lg:w-[50%] h-[40%] bg-white border-2 shadow-xl"}>
       
            <div className={"driverseat w-[10%] border-r-4"}>     
            </div>
            <div className={"driverseat w-[80%] border-r-4"}>   
            <div class="grid grid-cols-5 gap-4 mt-2 px-2">
            <div class={`${checkSeatBooked(18) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">18</span>
            </div>
            <div class={`${checkSeatBooked(19) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">19</span>
            </div>
            <div class={`${checkSeatBooked(20) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">20</span>
            </div>
            <div class={`${checkSeatBooked(21) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">21</span>
            </div>
            <div class={`${checkSeatBooked(22) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">22</span>
            </div>
            <div class={`${checkSeatBooked(23) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">23</span>
            </div>
            <div class={`${checkSeatBooked(24) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">24</span>
            </div>
            <div class={`${checkSeatBooked(25) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">25</span>
            </div>
            <div class={`${checkSeatBooked(26) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">26</span>
            </div>
            <div class={`${checkSeatBooked(27) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">27</span>
            </div>  
            </div>
            <div class="grid grid-cols-5 gap-4 mt-4 lg:mt-10 px-2">
            <div class={`${checkSeatBooked(28) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">28</span>
            </div>
            <div class={`${checkSeatBooked(29) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">29</span>
            </div>
            <div class={`${checkSeatBooked(30) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">30</span>
            </div>
            <div class={`${checkSeatBooked(31) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">31</span>
            </div>
            <div class={`${checkSeatBooked(32) ? "bg-red-300" : "bg-gray-200"} p-2 flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">32</span>
            </div> 
            </div>
            </div>
            <div className={"driverseat w-[10%]"}>
            <div class="grid grid-rows-5 gap-4 mt-2 ">
            <div class={`${checkSeatBooked(33) ? "bg-red-300" : "bg-gray-200"} py-4 lg:py-8 w-[80%] flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">33</span>
            </div>
            <div class={`${checkSeatBooked(34) ? "bg-red-300" : "bg-gray-200"} py-4 lg:py-8 w-[80%] flex justify-center items-center rounded-lg`}>
                <span class="text-lg font-semibold">34</span>
            </div>        
            </div>
            </div>
        </div>
        </div>
     </div>
  )
}
export default ViewBookedSeat;