import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Header></Header>
        </Route>
        <Route exact path="/">
        <Header></Header>
        </Route>
        <Route path="*">
            <Notfound></Notfound>
        </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
