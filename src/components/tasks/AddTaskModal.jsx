import Modal from "../Model";


const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen} title="This is title">
                    
        <p>
            similique odit? Laudantium veritatis adipisci ea id? Velit ad
            tenetur nesciunt officia commodi vitae perferendis molestias ducimus 
            quo aliquam rem delectus beatae blanditiis omnis explicabo labore
            minima accusantium deserunt quia, esse architecto, culpa impedit.
            Praesentium reiciendis quasi temporibus quos sit deserunt 
        </p>
    </Modal>
    );
};

export default AddTaskModal;