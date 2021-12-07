import React from 'react'

const property = {
	name: 'Megaport',
	address: {
		office: {
			unit: 'Level 3',
			street: '825 Ann Street',
			suburb: 'Fortitude Valley',
			city: 'Brisbane',
			state: 'Queensland',
			postcode: 4006,
		},
	},
	industry: {
		type: 'Internet and telecommunications',
		asxListed: true,
	},
}


export const ActivityTwo = () => {
	/**
	* get the value of the property
	* @param {String} path - the object path ie. 'address.office.state'
	* @obj {Object} the object
	*/
	function getValue(path, obj) {
		return path.trim().split('.').reduce((res, cur) => res[cur], obj);
	}

	return (<div>
		<h2>Activity 2 and 3</h2>
		<p>Result: please check the console of your browser</p>
		{console.log('Activity Two Results:')}
		{console.log(getValue('address.office.state', property))}
		{console.log(getValue('address.office.suburb', property))}
		{console.log(getValue('industry.asxListed', property))}
		{console.log(getValue('name', property))}
	</div>)
}
