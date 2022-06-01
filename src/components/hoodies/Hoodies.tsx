import React from 'react'
import './Hoodies.css'
import {useEffect, useState } from 'react'
import {Hoodies} from '../../types/hoodies'
import { BrowserRouter as Router, Link, NavLink  } from 'react-router-dom';




const HoodiePage = () => {

	const [hoodies, setHoodies] = useState<null | Hoodies[]>(null)

	useEffect(() => {
		async function getHoodies() {
			const response = await fetch('/api/hoodies', {method: 'GET'})
			const data: Hoodies[] = await response.json()
			setHoodies(data)   
		}
		getHoodies()
		console.log('Hoodies hämtat')
	}, [])

	function send() {
		
	}

	return (
	  <div className="wrapper-hoodies">
		<section className="hoodies">

				{hoodies ? hoodies.map((hoodie) => (
			 	 <div key={hoodie.id}>
				  	<div className="hoodieimg">
						  <NavLink to={`/hoodies/${hoodie.id}`}>
					  <img src={`${hoodie.image}`} alt="Bild på produkt"/>
					  </NavLink></div> 
					<h2 className="hoodie-heading">{hoodie.title}</h2>
					<p className="hoodie-price">{hoodie.price} KR</p>
					<button className="button-buy">BUY NOW</button>
			  </div> 
		  ))
		: 'No hoodies loaded yet'}
		</section>
	  </div>
	);
  }

  export default HoodiePage