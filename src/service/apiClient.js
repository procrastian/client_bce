import { API_URL } from '../service/constants'

async function request(method, endpoint, data) {
	const opts = {
		headers: {
			'Content-Type': 'application/json',
		},
		method,
	}

	if (method.toUpperCase() !== 'GET') {
		opts.body = JSON.stringify(data)
	}

	const response = await fetch(`${API_URL}/${endpoint}`, opts)
	return response.json()
}
async function get(endpoint) {
	return await request('GET', endpoint, null)
}

export { request, get }
