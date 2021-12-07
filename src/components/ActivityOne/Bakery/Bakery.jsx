import React, { useState } from 'react'
import { BakeryTable } from '../BakeryTable/BakeryTable'
import bakeryData from './data.json'
import styles from './Bakery.module.css'

export const Bakery = () => {
	const [searchValue, setSearchValue] = useState('')
	const [newCollection, setNewCollection] = useState('')
	const [sum, setSum] = useState(bakeryData.length)

	const handleSearchChange = (event) => {
		setSearchValue(event.target.value.toLowerCase())
	}

	const handleNewCollection = (event) => {
		setNewCollection(event.target.value)
	}

	const filteredList = bakeryData.filter(
		i => {
			return (i.type.toLowerCase().includes(searchValue)
				|| i.name.toLowerCase().includes(searchValue)
				|| i.topping.toLowerCase().includes(searchValue))
		}
	)

	/**
	* add new baked goods into table
	*/
	const handleAddCollection = () => {
		const list = newCollection.trim().split(',')
		list.length !== 4 ? (alert('Invalid input. The format should be like 0001,bread,good,cream')) : (
			bakeryData.push(Object.assign({}, {
				"id": list[0],
				"type": list[1],
				"name": list[2],
				"topping": list[3]
			}))
		)
		setNewCollection('')
		setSum(bakeryData.length)
	}

	return (
		<div>
			<h2>Activity 1</h2>
			<div className={styles.flexRow}>
				<h3>Bakery Table</h3>
				<input className={styles.filterBar} type="search" onChange={handleSearchChange} placeholder="Filter by Type, Name or Topping" />
			</div>
			<BakeryTable bakeryList={filteredList} />
			<div className={styles.flexRow}>
				<div className={styles.flexRow}>
					<input className={styles.filterBar} type="text" value={newCollection} onChange={handleNewCollection} placeholder="Input format: 0001,bread,good,cream" />
					<button className={styles.addButton} onClick={handleAddCollection}> + Add</button>
				</div>
				<p>Total collection: {sum}</p>
			</div>
		</div>
	)
}