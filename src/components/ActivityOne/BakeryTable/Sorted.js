/**
	* sort name in ascending order
	* @list {Array} - a list that needs to be sorted
	*/
export const ascendingName = (list) => {
	list.sort((pre, cur) => {
		const preElement = pre.name.toUpperCase();
		const curElement = cur.name.toUpperCase();
		if (preElement < curElement) {
			return -1;
		}
		if (preElement > curElement) {
			return 1;
		}
		return 0
	})
}

/**
	* sort name in descending order
	* @list {Array} - a list that needs to be sorted
	*/
export const descendingName = (list) => {
	list.sort((pre, cur) => {
		const preElement = pre.name.toUpperCase();
		const curElement = cur.name.toUpperCase();
		if (preElement < curElement) {
			return 1;
		}
		if (preElement > curElement) {
			return -1;
		}
		return 0
	})
}

/**
	* sort id in ascending order
	* @list {Array} - a list that needs to be sorted
	*/
export const ascendingId = (list) => {
	list.sort((pre, cur) => {
		const preElement = pre.id.toUpperCase();
		const curElement = cur.id.toUpperCase();
		if (preElement < curElement) {
			return -1;
		}
		if (preElement > curElement) {
			return 1;
		}
		return 0
	})
}

/**
	* sort id in descending order
	* @list {Array} - a list that needs to be sorted
	*/
export const descendingId = (list) => {
	list.sort((pre, cur) => {
		const preElement = pre.id.toUpperCase();
		const curElement = cur.id.toUpperCase();
		if (preElement < curElement) {
			return 1;
		}
		if (preElement > curElement) {
			return -1;
		}
		return 0
	})
}

/**
	* sort type in ascending order
	* @list {Array} - a list that needs to be sorted
	*/
export const ascendingType = (list) => {
	list.sort((pre, cur) => {
		const preElement = pre.type.toUpperCase();
		const curElement = cur.type.toUpperCase();
		if (preElement < curElement) {
			return -1;
		}
		if (preElement > curElement) {
			return 1;
		}
		return 0
	})
}

/**
	* sort type in descending order
	* @list {Array} - a list that needs to be sorted
	*/
export const descendingType = (list) => {
	list.sort((pre, cur) => {
		const preElement = pre.type.toUpperCase();
		const curElement = cur.type.toUpperCase();
		if (preElement < curElement) {
			return 1;
		}
		if (preElement > curElement) {
			return -1;
		}
		return 0
	})
}