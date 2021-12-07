import React, { useEffect } from 'react'

export const ActivityThree = () => {
	const megaportAPI = "https://api.megaport.com/v2/locations"

	/**
	* get the data from the endpoint
	* @url {String} - the URL of the endpoint
	*/
	const getData = async (url) => {
		await fetch(url, { method: 'GET' })
			.then(response => response.json())
			.then(result => console.log(result.data))
			.catch(error => console.log(`Error: ${error}`))
	};

	useEffect(() => {
		getData(megaportAPI)
	}, [])

	return (
		<div>
			{console.log('Activity Three Results:')}
		</div>)
}