import { Component } from "react";
import { useParams } from "react-router-dom";

function DisplayItinerary(props) {
  const params = useParams();
  //console.log(params)
//{params.id}

  const filteredList = () => {
    return (
      props.itineraryPics.filter(itin => itin.id == params.id)
    )
  }

  const thisItinerary = () => {

    return (
      filteredList().map(itin =>
        <div key={itin.id}>
          <h1>{itin.name}</h1>
          <p>{itin.start_date}</p> - <p>{itin.end_date}</p> 
        </div>
      )
    )
  }
  
  return (
      <div  className='display-itinerary-container'>
        {thisItinerary()}
        <button>Delete</button>
      </div>
  )
}

export default DisplayItinerary;

