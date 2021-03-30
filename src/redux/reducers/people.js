const initialState = {
  people: [],
  person: {},
  fullPerson: {}
}

const people = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PEOPLE':
      return {
        ...state,
        people: action.payload
      };
    case 'SET_PERSON':
      return {
        ...state,
        person: action.payload
      };
    case 'SET_PERSON_DESCRIPTION':
      return {
        ...state,
        fullPerson: action.payload
      };

  }
  return state;
}

export default people;