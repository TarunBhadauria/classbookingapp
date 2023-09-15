
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) :null,
    bookingCount:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).length :0,
}

const bookingSlice = createSlice({
    name: "booking",
    initialState: initialState,
    reducers: {
        createBooking(state, value) {
            console.log("Initial user",state.user);
            console.log("Value", value.payload);
            if (!state.user) {
                // state.user = value.payload;
                // console.log("!state.user");
                const newBooking = [];
                newBooking.push(value.payload);
                localStorage.setItem("user",JSON.stringify(newBooking));
                console.log("Booking added successfully");
                // localStorage.getItem()
                state.user=localStorage.getItem("user");
                state.bookingCount+=1;
            }
            else {
                let oldData = JSON.parse(localStorage.getItem("user"));
                console.log("OldData",oldData);
               
                    const newData = [...oldData, value.payload]
                    console.log("NewData",newData);
                    localStorage.setItem("user", JSON.stringify(newData));
                    console.log("Booking added successfully");
                    state.bookingCount+=1;
            }
        },
        cancelBooking(state, value) {
            // console.log(localStorage.getItem("user"));
            // console.log(state.user);
            state.user = JSON.parse(localStorage.getItem("user"));

            const filteredData = state.user.filter((data) => {
                if(data.id !== value.payload.id){
                    return data;
                }
            });
            console.log(filteredData);
           JSON.stringify(localStorage.setItem("user", JSON.stringify(filteredData)));
           state.bookingCount-=1;
           console.log("booking cancelled successfully");
        }
    }
})

export const { createBooking , cancelBooking } = bookingSlice.actions;

export default bookingSlice.reducer;