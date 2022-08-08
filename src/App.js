import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import NewItinerary from './components/NewItinerary';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/new" element={ <NewItinerary /> } />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
