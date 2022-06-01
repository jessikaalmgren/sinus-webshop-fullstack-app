import React from 'react'
import './Oneproduct.css'
import {useEffect, useState } from 'react'
import {Hoodies} from '../../types/hoodies'
import {useParams} from 'react-router';


const OneProductPage = () =>  {

	const {id} = useParams()
	const [ones, setOnes] = useState<null | Hoodies>(null)

	useEffect(() => {
		async function getOne() {
			const response = await fetch(`/api/hoodies/${id}`, {method: 'GET'})
			const data: Hoodies = await response.json()
			setOnes(data)   
			console.log('Hämtat per id ' + data)
		}
		
		getOne()
		//console.log('Hämtat per id ' + data)
	}, [])

	function ifLoaded () {
		if(ones) {
			return (
				<section className="wrapper-oneproduct">
					<div className="oneproduct">
						{ones ? <div className="product-card" key={ones.id}>
							<h5>{ones.title}</h5>
							<p>{ones.rate}</p>
							<p>{ones.price}</p>
							<p>{ones.description}</p>
							<img src={`${ones.image}`} alt="Bild på produkt"/>
							</div>
		
					
						: 'Laddar produkt'}

					</div>
					</section>
			)
		}
	}
		
	const loaded = ifLoaded()


	return (
	  <div className="wrapper-oneproduct">

			{loaded}
			<section className="oneproduct">
	

			</section>
			
	  </div>
	);
}

  export default OneProductPage