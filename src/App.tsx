import React from 'react';
import './App.css';
import Landing from './components/landing/Landing'
import Header from './components/header/Header'
import Hoodies from './components/hoodies/Hoodies'
import Shirts from './components/shirts/Shirts'
import Skateboards from './components/skateboards/Skateboards'
import Caps from './components/caps/Caps'
import Accessories from './components/accessories/Accessories'
import Footer from './components/footer/Footer'
import OneProduct from './components/oneProduct/Oneproduct'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
	  <Router>
    <div className="App">
	  <header className="App-header">
       <Header />
	   <div className="menu">
			<nav>
				<Link to="/hoodies"> HOODIES </Link>
				<Link to="/shirts"> T-SHIRTS </Link>
				<Link to="/skateboards"> SKATEBOARDS </Link>
				<Link to="/caps"> CAPS </Link>
				<Link to="/accessories"> ACCESSORIES </Link>
				<Link to="/limitededition"> LIMITED EDITION </Link>

			</nav>
			</div>
      </header>

	  <main className="content">
	  	<Routes>
            <Route path="/hoodies/:id" element={<OneProduct />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/caps" element={<Caps />} />
            <Route path="/skateboards" element={<Skateboards />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/" element={<Landing />} />
        </Routes>

	  </main>
	  <section className="footer">
		  <Footer />
	  </section>
	  </div>
	</Router>

  );
}

export default App;
