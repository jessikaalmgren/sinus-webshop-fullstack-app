import React from 'react'
import './Caps.css'
import {useEffect, useState } from 'react'
import {Caps} from '../../types/caps'

const CapsPage = () =>  {

	const [caps, setCaps] = useState<null | Caps[]>(null)

	useEffect(() => {
		async function getCaps() {
			const response = await fetch('/api/caps', {method: 'GET'})
			const data: Caps[] = await response.json()
			setCaps(data)   
		}
		getCaps()
		console.log('Caps hämtat')
	}, [])



	return (
	  <div className="wrapper-caps">
		<section className="caps">
		
		{caps ? caps.map((cap) => (
			 	 <div key={cap.id}>

		  			
				  	<div className="capimg"><img src={`${cap.image}`} alt="Bild på cap"/></div>
				  	<h2 className="cap-heading">{cap.title}</h2>
					<p className="cap-price">{cap.price} KR</p>
					<button className="button-buy">BUY NOW</button>
			  </div> 
		  ))
		: 'No caps loaded yet'}
		
			
		</section>
	  </div>
	);
  }

  export default CapsPage