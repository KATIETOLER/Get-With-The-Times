const key = process.env.REACT_APP_API_KEY

const fetchData = (type) => {
	return fetch(
		`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${key}`
	).then((res) => res.json())
}
export default fetchData
