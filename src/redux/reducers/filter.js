const initialState = {
  filterby: '',
  sortBy: ''

}

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filterby: action.payload
      };
      case 'SET_SORT':
        return {
          ...state,
          sortBy: action.payload
        };  
  }
  return state;
}

export default filter;