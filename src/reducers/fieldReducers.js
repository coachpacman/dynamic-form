const DefaultState = {
	fields: []
}

export default function(state = DefaultState, action) {
	switch(action.type) {
		case 'GET_FIELDS':
			return {...state, fields: action.fields}
	}
}