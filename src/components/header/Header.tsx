import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Link,  } from 'react-router-dom';

function Header() {
	return (
	  <div className="App">
		<header className="App-header">
		
		<div className="logo">
		<Link to="/"><img src="../img/sinus-logo-web.png" alt="Web"/></Link>
		
		</div></header>
		</div>
	);
  }

  export default Header