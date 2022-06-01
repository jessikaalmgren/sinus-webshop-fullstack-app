import React from 'react'
import './Skateboards.css'
import {useEffect, useState } from 'react'
import {Skateboards} from '../../types/skateboards'

const SkateboardsPage = () => {

	const [skateboards, setSkateboard] = useState<null | Skateboards[]>(null)

	useEffect(() => {
		async function getSkateboards() {
			const response = await fetch('/api/skateboards', {method: 'GET'})
			const data: Skateboards[] = await response.json()
			setSkateboard(data)   
		}
		getSkateboards()
		console.log('Skateboards hämtat')
	}, [])


	return (
		<div className="wrapper-skateboards">
		  <section className="skateboards">
		  
		  {skateboards ? skateboards.map((skateboard) => (
					<div key={skateboard.id}>

						
						<div className="skateboardimg"><img src={`${skateboard.image}`} alt="Bild på skateboard"/></div>
						<h2 className="skateboard-heading">{skateboard.title}</h2>
						<p className="skateboard-price">{skateboard.price} KR</p>
						<button className="button-buy">BUY NOW</button>
				</div> 
			))
		  : 'No skateboards loaded yet'}
		  
			  
		  </section>
		</div>
	  );

}
export default SkateboardsPage