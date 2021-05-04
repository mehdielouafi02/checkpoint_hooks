import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function AddModal({isOpen,closeModal , addMovie}){

  const [name,setName ] =useState('')

  const [story,setStory] =useState('')  

  const [year,setYear ] =useState(null)

  const [image,setImage] =useState('')

  const [Rating,setRating]=useState(0)




    return (
      <div>
       
        <Modal
          isOpen={isOpen}


          style={customStyles}
          contentLabel="Example Modal"
        >
<form  onSubmit={(e)=> {

  e.preventDefault ();

  addMovie ({name,story,image,year,Rating})

  closeModal()

  setRating (0) ; setStory ('') ; setYear (null) ; setName ('') ; setImage('') ;





}} >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Movie Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setName(e.target.value)} aria-describedby="emailHelp" required/>
 
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Story</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  onChange={(e)=>setStory(e.target.value)} aria-describedby="emailHelp" required/>
    </div>

    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Year</label>
    <input type="Number" min="1900" max="2021" class="form-control" id="exampleInputEmail1" onChange={(e)=>setYear(e.target.value)} aria-describedby="emailHelp" required/>
    </div>

    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Poster url</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setImage(e.target.value)}   aria-describedby="emailHelp" required/>
    </div>

    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Rating</label>
    <input type="Number" min="1" max="5" class="form-control" id="exampleInputEmail1" onChange={(e)=>setRating(e.target.value)} aria-describedby="emailHelp" required/>
    </div>

  <button type="submit" class="btn btn-primary">Submit</button>

  
</form>

          
          <button onClick={closeModal}>close</button>
          
         
        </Modal>
      </div>
      );
}
 
export default AddModal