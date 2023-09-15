import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { createBooking } from '../../Slices/bookingSlice';
import data from '../../utils/data';

const ClassTable = ({ classes, getRandom,totalSeats,setTotalSeats }) => {

  const [lectures, setLecures] = useState(classes);
  const dispatch = useDispatch();
  const { bookingCount: bookingCount } = useSelector((state) => state.booking)
  const assignRandomSeats = () => {
    let i = 0;
    const usedIndexes = [];
    while (i < 5) {
      const randomIndex = getRandom(0, classes.length);

      if (!usedIndexes.includes(randomIndex)) {

        usedIndexes.push(randomIndex);
        // console.log(usedIndexes);
        classes[randomIndex].seats = 0;
        i++;
      }
    }
  }

  const addBooking = (lecture) => {

    console.log(bookingCount);
    if (bookingCount < 3) {
      dispatch(createBooking(lecture));
      lectures.filter((subData) => {
        if (subData.id === lecture.id) {
          subData.seats -= 1;
        }
      })
      setTotalSeats(totalSeats-1);
      toast.success("Booked lecture successfully");
    }
    else {
      toast.error("Maximum limit reached")
    }
  }

  useEffect(() => {
    assignRandomSeats();
  }, [])



  return (
    <div className='text-center bg-slate-100 px-5'>
      <table className='border-2 border-slate-100 ' cellPadding={2} cellSpacing={4}>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Avilability</th>
          <th></th>
        </tr>
        {lectures.map((lecture) => (
          <tr key={lecture.id}>
            <td>{lecture.date}</td>
            <td>{lecture.time}</td>
            <td>{lecture.seats}</td>
            <td>
              {lecture.seats !== 0 ? <button onClick={() => { addBooking(lecture) }}>Book</button> : <button>full</button>}
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default ClassTable