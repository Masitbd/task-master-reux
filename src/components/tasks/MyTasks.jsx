import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userTasks } from '../../redux/features/tasks/tasksSlice';

const MyTasks = () => {
  const item = {
    id: 1,
    status: 'pending',
    title: 'Remove Button',
    description:
      'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
    date: '2023-08-28',
    assignedTo: 'Mir Hussain',
    priority: 'high',
  };
  
  const {tasks, userSpecificTasks} = useSelector((state) => state.tasksSlice)
  const {name} = useSelector(state=>state.userSlice)
  const dispatch = useDispatch()

  console.log(tasks)
  
   useEffect(()=>{
    dispatch(userTasks(name))
   },[dispatch, name, tasks])

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          userSpecificTasks?.map((item)=>(
        <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div> 

          ))
        }
      
      </div>
    </div>
  );
};

export default MyTasks;
