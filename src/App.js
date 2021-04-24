import React from 'react'
import Home from './Home'
import WhyChoose from './WhyChoose'
import Navbar from './Navbar'
import {BrowserRouter as Router,
  Route, Switch
  } from 'react-router-dom'
import Services from './Services'
import Footer from './Footer'
import Industries from './Industries'
import Line from './Line'
import Social from './Social'
import Learn from './Learn'
import  ScrollToTop  from './Scroll/index'

function App() {
  return (
    <Router>
        <ScrollToTop />
      <Line />
      <Social />
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
     
      
      
      <Route exact path="/home">
      <Home />
      </Route>
      <Route exact path="/whychoose" component={WhyChoose} />
      <Route exact path="/home/services" component={Services} />
    
      <Route exact path="/industries" component={Industries} />
      <Route exact path="/home/footer" component={Footer} />
        {/* <Learn /> */}
        </Switch>
    </Router>
  );
}

export default App;
