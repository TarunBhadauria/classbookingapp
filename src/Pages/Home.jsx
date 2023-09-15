import React, { useEffect, useState } from 'react'
import data from '../utils/data';
import ClassTable from '../Components/Core/ClassTable';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const [time, setTime] = useState(0);
    const [totalSeats,setTotalSeats] = useState(0);
    const navigate = useNavigate();
    const getRandom = (max, min) => {
        const random = Math.floor(Math.random() * (max - min) + min);
        return random;
    }


    useEffect(() => {
        // console.log(data);
        setTime(getRandom(60, 30));
        setTotalSeats(getRandom(5,15));
    }, []);

    setTimeout(() => {
        setTime(time - 1);
        if(time===0){
            setTime(60);
        }
    }, 1000);

    return (

        <div className='w-full h-full flex flex-col my-6 gap-4 justify-center items-center'>
            <div className='text-left w-[40%] flex justify-between'>
                <div>
                    <p>Time left : {time} seconds</p>
                    <h1>Claim your free trial class</h1>
                </div>
                <div>
                    <AiOutlineShoppingCart size={25} className='hover:cursor-pointer' onClick={()=>{navigate('/cart')}}/>
                </div>
            </div>
            <div className='flex justify-between w-[40%]'>
                <p>Class schedule</p>
                <p>Free seats left : <span>{totalSeats}</span></p>
            </div>
            <div >
                <ClassTable classes={data} getRandom={getRandom} totalSeats={totalSeats} setTotalSeats = {setTotalSeats}/>
            </div>
        </div>
    )
}

export default Home