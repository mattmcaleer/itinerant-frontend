import './App.css';
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import Home from './components/Home';
import { useEffect } from 'react';
import RegisterUser from './components/RegisterUser';
import NavBar from './components/NavBar'
import SignupTest from './components/SignUpTest';
import { useSelector, useDispatch, connect } from "react-redux";
import { getUser } from './actions/getUserActionTest';
import userReducer from './reducers/userReducer';
import SigninForm from './components/LoginTest';
import history from './history';
import ItinerariesContainer from './containers/ItinerariesContainer';
import ItinerariesList from './components/ItinerariesList';
import NewItineraryForm from './components/NewItineraryForm';

function App() {

  const user = useSelector((state) => {
    return state.userReducer.items;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      dispatch(getUser(token))
    }
  }, []);


    return (
      
      <div className="App">
        
        <header className="App-header">
          <NavBar />
          <BrowserRouter history={history}>
            <Routes>
              <Route exact path="/" element={ <Home user={user} /> } />
              <Route exact path="/login" element={ <SigninForm /> } />
              <Route exact path="/register" element={ <SignupTest /> } />

              <Route exact path="/new" element={<NewItineraryForm />} />
              <Route exact path="/itineraries" element={<ItinerariesContainer />} />
              
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
}



//<Route path="/itineraries/:id" element={<Itinerary />} />

export default App;
