import React from "react";

const Itineraries = props => {
  const itineraries = props.itineraries.map((itinerary, index) => {
    return <li key={index}>
            {itinerary.name}: {itinerary.start_date} - {itinerary.end_date}
          </li>;
  });

  return (
    <ol>
      {itineraries}
    </ol>
  )
}

export default Itineraries;