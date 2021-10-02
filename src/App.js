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
function App() {
  return (
    <>
    <Header></Header>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home></Home>}>
        </Route>
        <Route exact path="/SignUp" render={() => <SignUp></SignUp>}>
        </Route>
        <Route exact path="/LogIn" render={() => <LogIn></LogIn>}>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
