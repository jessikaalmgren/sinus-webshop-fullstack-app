import React from 'react'
import './Limited.css'
import {useEffect, useState} from 'react'
import {Limited} from '../../types/limited'
import { BrowserRouter as Router, Link, NavLink  } from 'react-router-dom';


const LimitedPage = () => {

	const [limited, setLimited] = useState<null | Limited[]>(null)

	useEffect(() => {
		async function getLimited() {
			const response = await fetch('/api/limited', {method: 'GET'})
			const data: Limited[] = await response.json()
			setLimited(data)   
		}
		getLimited()
		console.log('Hoodies hämtat')
	}, [])

	function send() {
		
	}
	return (
		<div className="wrapper-hoodies">
		  <section className="hoodies">
  
				  {limited ? limited.map((limit) => (
					<div key={limit.id}>
						<div className="hoodieimg">
							<NavLink to={`/limited/${limit.id}`}>
						<img src={`${limit.image}`} alt="Bild på produkt"/>
						</NavLink></div> 
					  <h2 className="hoodie-heading">{limit.title}</h2>
					  <p className="hoodie-price">{limit.price} KR</p>
					  <button className="button-buy">BUY NOW</button>
				</div> 
			))
		  : 'No hoodies loaded yet'}
		  </section>
		</div>
	  );

}

export default LimitedPage