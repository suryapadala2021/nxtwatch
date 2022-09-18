import './App.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/LoginRoute'
import Home from './components/Home'
import Trending from './components/Trending'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/trending" component={Trending} />
  </Switch>
)

export default App
