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
import Profile from './Components/Profile';
import Buy from './Components/Buy';
function App() {

  const [loggedIn , setloggedIn] = useState(false);
  const loggedInClose = () => setloggedIn(true);
  const loggedInShow = () => setloggedIn(false);
  const [user , setUser] = useState([{username: 'Anirudh', email: 'anirudh@gmail.com', password: '123'}]);
  const setLogInUser = (data) => setUser([data]);
  console.log("userApp: " + user);
  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} loggedInShow={loggedInShow}></Header>
          <Switch>
            <Route exact path="/" render={() => <Home></Home>}>
            </Route>
            <Route exact path="/SignUp" render={() => <SignUp></SignUp>}>
            </Route>
            <Route exact path="/LogIn" render={() => <LogIn setLogInUser={setLogInUser} loggedInClose={loggedInClose}></LogIn>}>
            </Route>
            <Route exact path="/Profile" render={() => <Profile user={user}></Profile>}>
            </Route>
            <Route exact path="/OnAuction" render={() => <Auction></Auction>}>
            </Route>
            <Route exact path="/PhotoClicked" render={() => <PhotoClicked></PhotoClicked>}>
            </Route>
            <Route exact path="/Buy" render={() => <Buy></Buy>}>
            </Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
