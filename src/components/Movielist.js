import React, {useState} from 'react'
import Card from './Card'
import {moviesData} from '../moviesData'
import AddModal from './AddModal'

const Movielist = () => {


const[movies,setMovies] = useState(moviesData)

const[isOpen,setIsOpen] = useState(false)


const [inputFilter , setInputFilter] = useState('')

const [RatingFilter , setRating ] = useState(0)

const closeModal = () => setIsOpen(false)

const addMovie =(newMovie) => setMovies ([...movies,newMovie])

const filtredlist = movies.filter(el => RatingFilter  !==0  ?  el.name.toLowerCase().includes(inputFilter.toLowerCase()) && el.Rating == RatingFilter:  el.name.toLowerCase().includes(inputFilter.toLowerCase()) )

console.log(filtredlist)

 return (


        <div>


   <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <form class="d-flex">
      <input class="form-control me-2" onChange={(e)=>setInputFilter(e.target.value)}     type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
     </form>
    <div>
     {[1,2,3,4,5].map(el =>

    <i key={el} class="fas fa-star" style={{color : el<= RatingFilter ?"yellow":"black", cursor:"pointer" }} onClick={()=> RatingFilter== el ? setRating(el-1): setRating(el)}    ></i> )

  }
</div>
     </div>
     </nav>
            <button onClick={()=> setIsOpen(true)} >  Add Movie</button>

            <AddModal isOpen={isOpen} closeModal={closeModal} addMovie={addMovie}/>

        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>

           {
           filtredlist.map((el,i)=>(            

           <Card key={i} movie={el} />
           ))

}

            
        </div>
        </div>
    )
}


export default Movielist
