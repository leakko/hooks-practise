import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:id" component={PostDetail}/>
      </Switch>
    </div>
  );
}

export default App;
