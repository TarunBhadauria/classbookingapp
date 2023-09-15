import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cancelBooking } from '../../Slices/bookingSlice';


const Cart = () => {
    const { user: user } = useSelector((state) => state.booking);
    const dispatch = useDispatch();
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(false);

    const reload = () =>{
        setLoading(true);
    }

    const deleteBooking = (booking) => {
        setLoading(true);
        dispatch(cancelBooking(booking));
        cartData.filter((cartItem) => cartItem.id !== booking.id);
        setLoading(false);
        reload();
    }


    useEffect(()=>{
        setCartData(user);
    },[]);
    

    useEffect(() => {
        console.log("user", cartData);
        if(loading){
            setCartData(user);
            setLoading(false);
        }
    }, [loading]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Cart</h1>
            {!cartData ? <p>No items found</p> : Array.isArray(cartData) && cartData.length > 0 ?
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Avilability</th>
                        </tr>

                        {cartData.map((cartData) => (

                            <tr key={cartData.id}>
                                <td>{cartData.date}</td>
                                <td>{cartData.time}</td>
                                <td>{cartData.seats}</td>
                                <td><button onClick={() => { deleteBooking(cartData) }}>cancel</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                : <p>No items found</p>}

        </div>
    )
}

export default Cart