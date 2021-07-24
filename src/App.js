import "./styles/App.scss"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
