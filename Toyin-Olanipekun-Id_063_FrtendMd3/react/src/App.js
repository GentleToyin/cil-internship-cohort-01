import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import ContactForm from './components/ContactForm';
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Footer from './components/Footer';
import About from './components/About'
import ContactListContextProvider from './context/ContactListContext';

function App() {

  return (
    <ContactListContextProvider>
      <Router>
        <div className="container">
          <Header />
          <Route path='/' exact render={(props) => (
            <div>
              <ContactForm />
              <Contacts />
              <Footer />
            </div>
          )} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    </ContactListContextProvider>
  );
}

export default App;
