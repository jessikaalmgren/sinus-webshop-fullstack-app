import React from 'react'
import './Accessories.css'
import {useEffect, useState } from 'react'
import {Accessories} from '../../types/accessories'

const AccessoriesPage = () =>  {

	const [accessories, setAccessories] = useState<null | Accessories[]>(null)

	useEffect(() => {
		async function getAccessories() {
			const response = await fetch('/api/accessories', {method: 'GET'})
			const data: Accessories[] = await response.json()
			setAccessories(data)   
		}
		getAccessories()
		console.log('Accessories hämtat')
	}, [])



	return (
	  <div className="wrapper-accessories">
		<section className="accessories">
		
		{accessories ? accessories.map((accessory) => (
			 	 <div key={accessory.id}>

		  			
				  	<div className="accessoryimg"><img src={`${accessory.image}`} alt="Bild på accessory"/></div>
				  	<h2 className="accessory-heading">{accessory.title}</h2>
					<p className="accessory-price">{accessory.price} KR</p>
					<button className="button-buy">BUY NOW</button>

			  </div> 
		  ))
		: 'No accessories loaded yet'}
		
			
		</section>
	  </div>
	);
  }

  export default AccessoriesPage