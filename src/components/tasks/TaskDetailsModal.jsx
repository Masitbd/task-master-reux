import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Model';


const TaskDetailsModal = ({ isOpen, setIsOpen, taskId:id  }) => {
    console.log('id',id)
    const { tasks } = useSelector((state) => state.tasksSlice);
  
    const task = tasks.find((item) => item.id === id);
  
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
        {task?.description}
      </Modal>
    );
  };
  

export default TaskDetailsModal;