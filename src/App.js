import React from 'react'
import Home from './Home'
import WhyChoose from './WhyChoose'
import Navbar from './Navbar'
import {HashRouter, Link} from 'react-router-dom'
import {BrowserRouter as Router,
  Route,  Switch
  } from 'react-router-dom'
import Services from './Services'
import Footer from './Footer'
import Industries from './Industries'
import Line from './Line'
import Social from './Social'
import Learn from './Learn'
function App() {
  
  return (
    
    <Router>
      <Line />
      <Social />
      <Navbar />

      <Route exact path="/" component={Home} />
     
      
      
      <Route exact path="/home">
      <Home />
      </Route>
      <Route exact path="/whychoose" component={WhyChoose} />
      <Switch>
        <Route exact path="/services"  component={Services}/>
      <Route exact path="/footer" component={Footer} />
      </Switch>
    
      <Route exact path="/industries" component={Industries} />
      <Route exact path="/learn" component={Learn} />
    </Router>
  );
}

export default App;
