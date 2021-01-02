import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import Profile from './components/profile';
import Home from './components/home';

function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
        <Switch>
          <Route path={['/','/home']} exact>
            <Home/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
