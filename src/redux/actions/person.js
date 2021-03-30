import { setPeople } from "./people";


export const getPerson = (e) => async (dispatch) => {
  try {
    e.preventDefault()
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    const res = await fetch("http://localhost:4000/api/people",
      {
        method: 'POST',
        body: JSON.stringify({ login, password }),
        headers: { 'Content-Type': 'application/json' }
      });
    const data = await res.json();
    dispatch(setPerson(data))

  }
  catch (e) {
    alert("this user does not exist")
  }
}

export const addPeople = (e) => async (dispatch) => {
  try {
    e.preventDefault()
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    const res = await fetch("http://localhost:4000/api/people",
      {
        method: 'POST',
        body: JSON.stringify({
          password: String(password),
          login: login,
          role: "user",
          nameEng: login,
          nameRus: "-",
          office: "-",
          profession: "-",
          image: "https://oldestatespa.com/files/oldestate/image/no_product.jpg",
          id: Math.random(),
          mobile: "-",
          email: "-",
          skype: "-",
          hireDate: "-",
          status: "active"
        }),
        headers: { 'Content-Type': 'application/json' }
      });
    const data = await res.json();
    console.log(data)
    dispatch(setPeople(data))
    alert(`User has been successfully registered`)
  }
  catch (e) {
    console.log(e)
  }
}

export const setPerson = (person) => ({
  type: 'SET_PERSON',
  payload: person,
})
