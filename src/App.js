import './App.css';
import AppBar from './components/appbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './components/drawer_components/feed';
import Post from './components/drawer_components/post';
import PersonalInfo from './components/drawer_components/personal_info';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Route exact path="/" component={Post} />
        <Route exact path="/" component={Feed} />
        <Route path="/info" component={PersonalInfo} />
      </div>
    </Router>
  );
}

export default App;
