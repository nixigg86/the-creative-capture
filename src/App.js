import React from 'react';
// Import global style
import GlobalStyle from './components/GlobalStyle';
// Import Pages
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//Router
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
