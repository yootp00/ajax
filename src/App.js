import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Header from './components/Header';

import Main from "./pages/Main";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/movie" component={Movie} exact/>
      </Switch>
    </Router>
  );
}

export default App;
