import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import FormSignUp from "../FormSignUp/FormSignUp";
import FormSignIn from "../FormSignIn/FormSignIn";
import Info from "../Info/Info";
import Settings from "../Settings/Settings";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import DescriptionPerson from "../DescriptionPerson/DescriptionPerson";
import InfoAdmin from "../InfoAdmin/InfoAdmin";
import InfoHr from "../InfoHr/InfoHr";
import { useDispatch, useSelector } from "react-redux";
import {fetchPeople} from "../../redux/actions/people";
import {getPerson} from "../../redux/actions/person";
import {addPeople} from "../../redux/actions/person";


export default function App() { 
  
  const dispatch = useDispatch();
  const people = useSelector(state => state.people.people);
  const { nameEng, role, image } = useSelector(state => state.people.person);
  
  React.useEffect(() => dispatch(fetchPeople()), [])

  return (
    <Router>
        <Header user={nameEng} image={image}/>
        <Switch>
          <Route exact path="/adressbooks" render={() => nameEng ? <Main people={people}/> : <Redirect to="/"/> } />
          <Route exact path="/settings" render={() => role  === "admin" ? <Settings people={people}/> : <Redirect to="/infoadmin"/> }/>
          <Route exact path="/" render={() => <Info/>} />
          <Route exact path="/signup" render={() => <FormSignUp addPeople={(e) => {dispatch(addPeople(e))}}/>} />
          <Route exact path="/signin" render={() => !nameEng ? <FormSignIn getPerson={(e) => {dispatch(getPerson(e))}}/> : <Redirect to="/adressbooks"/> } />
          <Route exact path="/description/:id" render={() => role  === "admin" || role === "editor" ? <DescriptionPerson/> : <Redirect to="/infohr"/>} />
          <Route exact path="/infoadmin" render={() => <InfoAdmin/>}/>
          <Route exact path="/infohr" render={() => <InfoHr/>}/>
        </Switch>
    </Router>
  )  
}

