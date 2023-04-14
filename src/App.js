import React from "react";
import "./assets/globalStyle.css";
import './App.css';
import Footer from './component/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/header/Header";
import FrontPage from "./component/frontPage/FrontPage";
import Contact from "./component/contact/Contact";
import AboutListing from "./component/about/AboutListing";
import ServicesListing from './component/services/ServicesListing';
import PortfolioListing from "./component/portfolio/PortfolioListing";



function App() {
  return (
    <div className="App">
          <Router>
            <Header />
                <Switch>
                    <Route path="/" exact component={FrontPage } /> 
                    <Route path="/about" component={AboutListing } /> 
                    <Route path="/services" component={ServicesListing } /> 
                    <Route path="/portfolio" component={PortfolioListing } />  
                    <Route path="/contact" component={Contact } />  
                </Switch> 
            <Footer /> 
          </Router>
    </div>
  );
}

export default App;
