// Action types
export const SAVE_JSON_DATA = 'SAVE_JSON_DATA'
export const CLEAR_JSON_DATA = 'CLEAR_JSON_DATA'

// Action creators
export const saveJsonData = (data) => ({
  type: SAVE_JSON_DATA,
  payload: {
    data,
    timestamp: new Date().toLocaleString('zh-CN')
  }
})

export const clearJsonData = () => ({
  type: CLEAR_JSON_DATA
})