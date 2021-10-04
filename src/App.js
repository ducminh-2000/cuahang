import Room from './components/room'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import CreateRoom from './components/createRoom';

function App() {
  return (
    <div>
          <Router>
            <div className="container">
              <Switch>
                <Route path="/" exact component={CreateRoom}></Route>
                <Route path="/room/:id" component={Room}></Route>
              </Switch>
            </div>
          </Router>
    </div>
  );
}

export default App;
