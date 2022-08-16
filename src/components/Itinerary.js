import React, { Component } from 'react';

class Itinerary extends Component {

  handleOnClick() {
    this.props.deleteItinerary(this.props.itinerary.id);
  }

  render() {
    const { itinerary } = this.props;

    return (
      <div>
        {console.log(itinerary.text.name)}
        <li>
          {itinerary.text.name}: {itinerary.text.start_date} - {itinerary.text.end_date}
          <button onClick={() => this.handleOnClick()}> X </button>
        </li>
      </div>
    );
  }
};

export default Itinerary;