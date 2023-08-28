import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   
    tasks: []
}

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers:{
       task: ()=>{

        }
    }
})

export const {task} = taskSlice.actions
export default  taskSlice.reducer