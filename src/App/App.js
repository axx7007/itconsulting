import React from 'react'
import Home from '../Home'
import WhyChoose from '../WhyChoose'
import Navbar from '../Navbar'
import {BrowserRouter as Router,
  Route,  Switch
  } from 'react-router-dom'
import Services from '../Services'
import Footer from '../Footer'
import Industries from '../Industries'
import Line from '../Line'
import Social from '../Social'
import Learn from '../Learn'
import {AppWrapper} from './style'
function App() {
  
  return (
    
      // <AppWrapper>
    <Router>
      <Social />
      <Line />
      <Navbar />
      <Switch>

      <Route exact path="/" component={Home} />
     
      
      
      <Route exact path="/home">
      <Home />
      </Route>
      <Route exact path="/whychoose" component={WhyChoose} />
        <Route exact path="/home"  component={Home}/>
      <Route exact path="/footer" component={Footer} />
    
      <Route exact path="/industries" component={Industries} />
      <Route exact path="/learn" component={Learn} />
      </Switch>
    </Router>
    // </AppWrapper>
  );
}

export default App;
