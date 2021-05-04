import React from 'react'

const Card = ({movie}) => {
    return (
        <div>
            <div class="card" style={{width: '15rem', height:'650px',marginTop:"100px"}}>
  <img src={movie.image} class="card-img-top" alt="..." style={{minHeight:"400px"}}/>
  <div class="card-body">
    <h5 class="card-title">{movie.name} ({movie.year})</h5>
    <p class="card-text">{movie.story}</p>
    <div></div>
{
  [1,2,3,4,5].map (el=>(
      el<=movie.Rating ?
    <i key={el} style= {{color :"yellow"}}  class="fas fa-star"></i> : <i key={el} class="fas fa-star"> </i>))
    }
  
    <a href="#" class="btn btn-primary">More details</a>
  </div>
</div>
            
        </div>
    )
}

export default Card
