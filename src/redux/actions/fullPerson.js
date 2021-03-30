import axios from 'axios';

export const fetchPersonDescr = (id) => (dispatch) => {
    axios.get(`http://localhost:4000/api/people/${id}`).then(({data}) => {
        dispatch(personDescr(data))
    })
}

export const personDescr = (person) => ({
    type: 'SET_PERSON_DESCRIPTION',
    payload: person,
});