import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import NewItineraryForm from './components/NewItineraryForm';
import { Component } from 'react';
import ItinerariesContainer from './containers/ItinerariesContainer';
import RegisterUser from './components/RegisterUser';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/new" element={ <ItinerariesContainer /> } />
              <Route exact path="/register" element={ <RegisterUser /> } />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
