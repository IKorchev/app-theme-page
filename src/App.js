import "./styles/App.scss"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import About from "./components/About"
import InfoCards from "./components/InfoCards"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <main className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <LandingPage />
            <InfoCards />
            <MainSection />
            <Footer />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
