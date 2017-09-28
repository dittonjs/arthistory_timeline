const defaultState = {
  searchVal: "",
  fromDate: -33000,
  toDate: 2017
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case "CHANGE_SEARCH_VALUE": {
      return { ...state, searchVal: action.val }
    }
    case "CHANGE_FROM_DATE": {
      return { ...state, fromDate: action.val }
    }
    case "CHANGE_TO_DATE": {
      return { ...state, toDate: action.val }
    }
  }
  return state;
}