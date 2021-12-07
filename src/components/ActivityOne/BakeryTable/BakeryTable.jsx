import React, { useState } from 'react'
import {
	ascendingName,
	descendingName,
	ascendingId,
	descendingId,
	ascendingType,
	descendingType
} from './Sorted'
import styles from './BakeryTable.module.css'

export const BakeryTable = ({ bakeryList }) => {
	const [sort, setSort] = useState(false)

	/**
	* Sort name in ascending order, and record change.
	*/
	const handleAscendingSortedName = () => {
		setSort(!sort)
		return ascendingName(bakeryList)
	}

	/**
	* sort name in descending order, and record change.
	*/
	const handleDescendingSortedName = () => {
		setSort(!sort)
		return descendingName(bakeryList)
	}

	/**
	* Sort id in ascending order, and record change.
	*/
	const handleAscendingSortedId = () => {
		setSort(!sort)
		return ascendingId(bakeryList)
	}

	/**
	* sort id in descending order, and record change.
	*/
	const handleDescendingSortedId = () => {
		setSort(!sort)
		return descendingId(bakeryList)
	}

	/**
	* Sort type in ascending order, and record change.
	*/
	const handleAscendingSortedType = () => {
		setSort(!sort)
		return ascendingType(bakeryList)
	}

	/**
	* sort type in descending order, and record change.
	*/
	const handleDescendingSortedType = () => {
		setSort(!sort)
		return descendingType(bakeryList)
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th className={styles.idCol}>
							<div className={styles.sortedButtons}>ID
								<div>
									<button className={styles.sortedButton} onClick={handleAscendingSortedId}>&#708;</button>
									<button className={styles.sortedButton} onClick={handleDescendingSortedId}>&#709;</button>
									</div>
								</div>
						</th>
						<th className={styles.idCol}>
							<div className={styles.sortedButtons}>Type
								<div>
									<button className={styles.sortedButton} onClick={handleAscendingSortedType}>&#708;</button>
									<button className={styles.sortedButton} onClick={handleDescendingSortedType}>&#709;</button>
								</div>
							</div>
						</th>
						<th>
							<div className={styles.sortedButtons}>Name
								<div>
									<button className={styles.sortedButton} onClick={handleAscendingSortedName}>&#708;</button>
									<button className={styles.sortedButton} onClick={handleDescendingSortedName}>&#709;</button>
								</div>
							</div>
						</th>
						<th>Topping</th>
					</tr>
				</thead>
				<tbody>
					{/* Did not set key for map because the id is not unique.
					    Normally we should have unique key for map() */}
					{bakeryList.map(i => (
						<tr>
							<td className={styles.idCol}>{i.id}</td>
							<td className={styles.idCol}>{i.type}</td>
							<td>{i.name}</td>
							<td>{i.topping}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}