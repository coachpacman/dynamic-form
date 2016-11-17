import axios from 'axios'
import store from 'store'

axios.defaults.baseURL = 'http://localhost:8001/'

export function getFields() {
	return axios.get('fields').then(function(resp) {
		console.log('getFields()', resp.data)
		store.dispatch({
			type: 'GET_FIELDS',
			fields: resp.data
		})
	})
}
