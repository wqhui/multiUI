import { SAVE_JSON_DATA, CLEAR_JSON_DATA } from '../actions/designer'

const initialState = {
  data: null,
  list: []
}

const designerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_JSON_DATA:
      return {
        ...state,
        data: action.payload.data,
        list: [action.payload, ...state.list]
      }
    case CLEAR_JSON_DATA:
      return {
        ...state,
        data: null,
        list: []
      }
    default:
      return state
  }
}

export default designerReducer