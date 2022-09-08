import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import NavBar from './components/NavBar'
import ItinerariesContainer from './containers/ItinerariesContainer';
import SignUp from './components/SignUp';

function App() {

    return (
      
      <div className="App">
        
        <header className="App-header">
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path="/itineraries/*" element={<ItinerariesContainer />} />
              <Route exact path='/signup' element={ <SignUp /> } />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
}

export default App;
