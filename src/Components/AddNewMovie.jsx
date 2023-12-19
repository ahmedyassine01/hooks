import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';
import EditedMovie from './EditMovie';


const AddNewMovie = ({AddFunction}) => {
    const[name, setName] = useState("");
    const[image, setImage] = useState("");
    const[rating, setRating] = useState(1);
    const[date, setDate] = useState("");
    const handleRating=(x)=>setRating(x);
    const handleSubmit=()=>{
        const editedMovie={
            
            name,image,rating,date      
        };
        AddFunction(editedMovie);
        closeModal();
        setDate("")
        setImage("")
        setName("")
        setRating("1")

        AddFunction(editedMovie);
        closeModal()
    }
    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  

  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div className='btna'>
        <button onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className='movie-card' onSubmit={handleSubmit}>
            <label>Movie Title</label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <label>Movie Poster</label>
            <input type="text" value={image} onChange={e=>setImage(e.target.value)}/>
            <StarRating rating={rating} handleRating={handleRating}/>
            <label>Movie Date</label>
            <input type="Date" value={date} onChange={e=>setDate(e.target.value)}/>
            <div>
                <button className="btn" onClick={closeModal}>Cancel</button><button className="btn" type='submit'>Confirme</button>
            </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddNewMovie