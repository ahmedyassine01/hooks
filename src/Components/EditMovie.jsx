import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';


const EditedMovie = ({handleEdit,film}) => {
    const[name, setName] = useState(film.name);
    const[image, setImage] = useState(film.image);
    const[rating, setRating] = useState(film.rating);
    const[date, setDate] = useState(film.date);
    const handleRating=(x)=>setRating(x);
    const handleSubmit=()=>{
        const newOne={
            id:Math.random(),
            name,image,rating,date      
        };
        handleEdit(newOne);
        closeModal();
        setDate("")
        setImage("")
        setName("")
        setRating("1")

        handleEdit(newOne);
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

export default EditedMovie