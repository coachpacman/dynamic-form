// create store here
import { createStore } from 'redux'

import fieldReducers from 'reducers/fieldReducers'

const store = createStore(fieldReducers)

export default store