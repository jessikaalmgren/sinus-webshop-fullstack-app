import React from 'react'
import './Shirts.css'
import {useEffect, useState } from 'react'
import {Shirts} from '../../types/shirts'

const ShirtsPage = () =>  {

	const [shirts, setShirts] = useState<null | Shirts[]>(null)

	useEffect(() => {
		async function getShirts() {
			const response = await fetch('/api/shirts', {method: 'GET'})
			const data: Shirts[] = await response.json()
			setShirts(data)   
		}
		getShirts()
		console.log('Shirts hämtat')
	}, [])



	return (
	  <div className="wrapper-shirts">
		<section className="shirts">
		
		{shirts ? shirts.map((shirt) => (
			 	 <div key={shirt.id}>

		  			
				  	<div className="shirtimg"><img src={`${shirt.image}`} alt="Bild på shirt"/></div>
				  	<h2 className="shirt-heading">{shirt.title}</h2>
					<p className="shirt-price">{shirt.price} KR</p>
					<button className="button-buy">BUY NOW</button>
			  </div> 
		  ))
		: 'No shirts loaded yet'}
		
			
		</section>
	  </div>
	);
  }

  export default ShirtsPage