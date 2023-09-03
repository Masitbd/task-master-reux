import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import Modal from "../Model";


const AddTaskModal = ({isOpen, setIsOpen}) => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch()
    //const {name} = useSelector(state => state.tasks)
    
    const onSubmit = data => {
        dispatch(addTask(data))
        console.log(data);
        onCalcel()
    }

    const onCalcel =()=>{
        reset()
        setIsOpen(false)
    }
   /* 
   add react hook form and tailwindcss-forms
    */
    return (
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen} title="This is title">
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
            <label htmlFor='tilte'>Tilte</label>
        <input className="w-full rounded-md" type="text" id='title' {...register('title')} />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor='tilte'>Description</label>
        <textarea className="w-full rounded-md" type="text" id='description' {...register('description')} />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor='tilte'>Deadline</label>
        <input className="w-full rounded-md" type="date" id='date' {...register('date')} />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor='tilte'>AssignTo</label>
            <select className="w-full rounded-md" id='assignedTo' {...register("assignedTo")}>
                <option value="Mamun">Mamun</option>
                <option value="Shafiquel">Shafiquel</option>
                <option value="Kamrul">Kamrul</option>
                <option value="Faruk">Faruk</option>

            </select>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor='tilte'>Priority</label>
            <select className="w-full rounded-md" id='priority' {...register("priority")}>
                <option defaultValue value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
        </div>
        <div  className="flex flex-row gap-1 justify-end mt-3 mr-1">
        <button onClick={()=>onCalcel()} type="button" className="btn btn-danger mr-1">Cancel</button>    
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
            
       
       </form>             
       
        </Modal>
    );
};

export default AddTaskModal;