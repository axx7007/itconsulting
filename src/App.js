import React from 'react'
import Home from './Home'
import WhyChoose from './WhyChoose'
import Navbar from './Navbar'
import {BrowserRouter as Router,  Route} from 'react-router-dom'
import Services from './Services'
import Contact from './Footer'
import Industries from './Industries'
import Line from './Line'
import Social from './Social'
function App() {
  return (
    <Router>
      <Line />
      <Social />
      <Navbar />
      <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/home">
      <Home />
      </Route>
      <Route exact path="/whychoose">
      <WhyChoose />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/industries">
        <Industries />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
