// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Auction from './Components/Auction';
import { useState } from 'react';
import Footer from './Components/Footer';
import PhotoClicked from './Components/PhotoClicked';
function App() {

  const [loggedIn , setloggedIn] = useState([true]);
  const loggedInHandler = () =>{
    setloggedIn(false);
  }

  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} loggedInHandler={loggedInHandler}></Header>
          <Switch>
            <Route exact path="/" render={() => <Home></Home>}>
            </Route>
            <Route exact path="/SignUp" render={() => <SignUp></SignUp>}>
            </Route>
            <Route exact path="/LogIn" render={() => <LogIn></LogIn>}>
            </Route>
            <Route exact path="/OnAuction" render={() => <Auction></Auction>}>
            </Route>
            <Route exact path="/PhotoClicked" render={() => <PhotoClicked></PhotoClicked>}>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
