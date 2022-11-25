import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={['/', '/home']}>
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
