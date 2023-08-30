import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
              'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mir Hussain',
            priority: 'high',
          }
    ]
}

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers:{
      /*  addTask: (state, action)=>{
       state.tasks.push(action.payload) */
       
       addTask: (state, {payload})=>{
       if (state.tasks.length=== 0){
        state.tasks.push({id:1, ...payload})
       }
       else{
       // state.tasks.push({id: state.tasks.length +1 , ...payload})
       const lastElement = state.tasks.at(-1) // retuen array length
       state.tasks.push({id: lastElement.id +1, ...payload})
       } 
       
        },
        removeTask: (state, {payload})=>{
         state.tasks.filter(item=> item.id !==payload)
        }
    }
})

export const {addTask, removeTask} = taskSlice.actions
export default  taskSlice.reducer