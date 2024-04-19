import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ReservationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  seatNumber: Yup.number().required('Seat Number is required').positive('Seat Number must be positive').integer('Seat Number must be an integer'),
  date: Yup.date().required('Date of Booking is required')
});

function UpdateTicket(props) {
    console.log(props)
  const [selectedSeat, setSelectedSeat] = useState(props?.seatNumber);
  const [selectedDate,setSelectedDate]=useState('')
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    fetchBookedSeatsData()
  }, []);
 const fetchBookedSeatsData=()=>{
  const bookedSeatsData = JSON.parse(localStorage.getItem('bookedSeats')) || [];
    setBookedSeats(bookedSeatsData);
 }
  const handleSeatSelect = (seatNumber) => {
      setSelectedSeat(seatNumber);
  };

const handleFormSubmit = (values, { resetForm }) => {
  console.log("seea",values.seatNumber)
  const updatedBookedSeats = bookedSeats.map(seat => {
    if (new Date(seat.date)?.toLocaleDateString('en-GB') == new Date(values?.date)?.toLocaleDateString('en-GB') && seat.seatNumber == props?.seatNumber) {
      console.log("calledddd",{
        "firstName": values.firstName,
        "lastName" :values.lastName,
        "email":values.email,
        "seatNumber":values.seatNumber,
        "date":values.date?.toString()
        })
      return {
      "firstName": values.firstName,
      "lastName" :values.lastName,
      "email":values.email,
      "seatNumber":values.seatNumber,
      "date":values.date?.toString()
      }
    }
    return seat;
  });

  localStorage.setItem('bookedSeats', JSON.stringify(updatedBookedSeats));
  setBookedSeats(updatedBookedSeats); 
  resetForm();
  fetchBookedSeatsData();
  props?.ClosedModal()
  alert("Update Seat Successfully....")
  setSelectedSeat(null);
}


  return (
    <div  className={"overflow-hidden flex flex-col bg-white shadow-xl drop-shadow w-full md:w-[50%] rounded p-3"}>
      <h1 className={"text-bold text-3xl text-center my-3"}>Update Reserve Seat</h1>
      <Formik
        initialValues={{ firstName: props?.firstName || '', lastName: props?.lastName || '', email: props?.email || '', seatNumber: props?.seatNumber || '', date: props?.date|| new Date() }}
        validationSchema={ReservationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className={'flex flex-col'}>
            <Field type="text" name="firstName" placeholder="First Name" className={"p-3 rounded border-2 mb-2 "}/>
            <ErrorMessage name="firstName" component="div" className="error mb-2" />
            <Field type="text" name="lastName" placeholder="Last Name" className={"p-3 rounded border-2 mb-2"} />
            <ErrorMessage name="lastName" component="div" className="error mb-2" />
            <Field type="email" name="email" placeholder="Email" className={"p-3 rounded border-2 mb-2"} />
            <ErrorMessage name="email" component="div" className="error mb-2" />
            <Field name="date" className={"w-full outline-none border-2 py-3 my-2 rounded"}>
              {({ field, form }) => (
                <DatePicker
                  selected={field.value}
                  name={"date"}
                  default={"Please Select Date"}
                  className={"w-full outline-none border-2 py-3 rounded"}
                  onChange={(date) => {
                    setFieldValue(field.name, date);
                    setSelectedDate(date)
                    form.setFieldTouched(field.name, true);
                  }}
                  minDate={new Date()}
                />
              )}
            </Field>
            <Field
              as="select"
              name="seatNumber"
              className={"w-full outline-none border-2 py-3 my-2 rounded"}
              onChange={(e) => {
                setFieldValue('seatNumber', e.target.value);
                setSelectedSeat(parseInt(e.target.value));
              }}
              onBlur={(e) => {
                setFieldValue('seatNumber', e.target.value);
                setSelectedSeat(parseInt(e.target.value));
              }}
              value={selectedSeat || ''}
            >
              <option value="">Select Seat Number</option>
              {Array.from({ length: 40 }, (value, index) => (
                <option key={index + 1} value={index + 1} >
                  {index + 1}
                </option>
              ))}
            </Field>
            <ErrorMessage name="seatNumber" component="div" className="error" />
            <button type="submit" className={"bg-blue-500 p-3 rounded"} >Update Reserve Seat</button>
            <button type="submit" onClick={()=>props?.ClosedModal()} className={"bg-blue-500 mt-2 p-3 rounded"} >Close</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateTicket;

