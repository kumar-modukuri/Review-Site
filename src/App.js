import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import Create from './Create';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ReviewDetails from './ReviewDetails';

function App() {
  const title = 'Welcome to the sample Review-Site';
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/create">
              <Create />
            </Route>
            <Route path = "/reviews/:id">
              <ReviewDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;