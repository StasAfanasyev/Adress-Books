import axios from 'axios';

export const fetchPeople = () => (dispatch) => {
    axios.get("http://localhost:4000/api/people/").then(({data}) => {
        dispatch(setPeople(data))
    })
}

export const setPeople = (people) => ({
    type: 'SET_PEOPLE',
    payload: people,
});