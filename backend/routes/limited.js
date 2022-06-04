const getDataBase = require('../database.js')
const db = getDataBase()
const express = require('express')
const router = express.Router()


//REST API
//GET PRODUCTS
router.get('/', async (req, res) => {
	const limitedRef = db.collection('limited')
	const snapshot = await limitedRef.get()

	if (snapshot.empty) {
		res.send([])
		return
	}

	let items = []
	snapshot.forEach( doc => {
		const data = doc.data()
		data.id = doc.id
		items.push(data)
	})

	res.send(items)
})

//GET id
router.get('/:id', async (req, res) => {
	const id = req.params.id
	const docRef = await db.collection('limited').doc(id).get()

	if( !docRef.exists) {
		res.status(404).send('This product does not exist.')
		return
	}

	const data = docRef.data()
	res.send(data)
})


//POST product
router.post('/', async (req, res) => {
	const object = req.body 

	if( !checkProduct(object)) {
		res.sendStatus(400)
		return
	}

	const docRef = await db.collection('caps').add(object)
	res.send(docRef.id)
})

//PUT product:id
router.put('/:id', async (req, res) => {
	const object = req.body
	const id = req.params.id

	if( !object || !id) {
		res.sendStatus(400)
		return
	}

	const docRef = db.collection('limited').doc(id)
	await docRef.set(object, {merge: true})
	res.sendStatus(200)

})

function checkProduct(maybeProduct) {
	if (!maybeProduct || !maybeProduct.title || !maybeProduct.price || !maybeProduct.image || !maybeProduct.description || !maybeProduct.rate)
	return false

	return true
}

//DELETE product:id
router.delete('/:id', async (req, res) => {
	const id = req.params.id
	const docRef = await db.collection('limited').doc(id).get()

	if( !docRef.exists ) {
		res.sendStatus(400)
		return
	}

	await db.collection('limited').doc(id).delete()
	res.sendStatus(200)
})

module.exports = router