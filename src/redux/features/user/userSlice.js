import { createSlice } from "@reduxjs/toolkit";

const initialState={
 name: 'Mamun',
 email: 'mamun@gmail.com',
 }

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{

    }
})


//export const {} = userSlice.actions
export default userSlice.reducer