import React from 'react'
import './Landing.css'
import {useEffect, useState } from 'react'
import {Hoodies} from '../../types/hoodies'

const LandingContent = () => {

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


	return (
	  <div className="wrapper-landing">
		 	<section className="content1">
			 {hoodies ? hoodies.map((hoodie) => (
			  <div key={hoodie.id}>
				  <div className="hoodieimg"><img src={`${hoodie.image}`} alt="Bild på hoodie"/></div>
				  <h2 className="hoodie-heading">{hoodie.title}</h2>
				  <p className="hoodie-price">{hoodie.price}</p>
			  </div>
			  
		  ))
		  
		: 'No hoodies loaded yet'}

		</section>
	  </div>

	);
  }

  export default LandingContent