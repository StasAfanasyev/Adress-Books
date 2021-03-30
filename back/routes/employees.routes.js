const express = require('express');
const employeesRoute = express.Router();

const people = [
  { 
    login: "Anna",
    password: "12345",
    role: "admin",
    nameEng: "Anna Belova", 
    nameRus: "Анна Белова", 
    office: 1206, 
    profession: "Java Developer", 
    image: "https://sun1-18.userapi.com/lt_Res907Xvxqs_Bb_fSSmsPtw0WEqpDnh_gPw/oHjHCsx7dgQ.jpg",
    id: 1,
    mobile: "+375448789723",
    email: "AnnaBelova@mail.com",
    skype: "AnnaBelova",
    hireDate: "02.03.2013",
    status: "active"
   },
  { 
    login: 'Dmitry',
    password: "12345",
    role: "editor",
    nameEng: "Dmitry Antonenko",
    nameRus: "Дмитрий Антоненко",
    office: 1201, profession: "Java Developer",
    image: "https://sun1-93.userapi.com/impf/c836620/v836620071/12260/u2bWuraACBg.jpg?size=600x600&quality=90&proxy=1&sign=412ed05538884b5a70e7524861b89693",
    id: 2,
    mobile: "+375448534723",
    email: "DmitryAntonenko@mail.com",
    skype: "DmitryAntonenko",
    hireDate: "22.03.2015",
    status: "active"
  },
  { 
    login: 'Aleh',
    password: "12345",
    role: "user",
    nameEng: "Aleh Jukau",
    nameRus: "Олег Жуков",
    office: 1202, profession: "DevOps Developer",
    image: "https://yt3.ggpht.com/a/AATXAJwxUB3vjRcNkMBww7DjUERCtRXje28eEI8zDwJsgA=s900-c-k-c0xffffffff-no-rj-mo",
		id: 3,
    mobile: "+375299123443",
    email: "AlehJukau@mail.com",
    skype: "AlehJukau",
    hireDate: "13.08.2010",
    status: "active"
  },
  { 
    login: 'Maksim',
    password: "12345",
    role: "user",
    nameEng: "Maksim Podolsky",
    nameRus: "Максим Подольский", 
    office: 1203, 
    profession: "Golang Developer", 
    image: "https://yt3.ggpht.com/a/AATXAJxz86-ONyat9W1dxsvkO2QFRUDymgpjVsn2sw=s900-c-k-c0xffffffff-no-rj-mo",
		id: 4,
    mobile: "+375339875634",
    email: "MaksimPodolsky@mail.com",
    skype: "MaksimPodolsky",
    hireDate: "03.12.2020",
    status: "active"
  },
  { 
    login: 'Vitaly',
    password: "12345",
    role: "user",
    nameEng: "Vitaly Vlasov", 
    nameRus: "Виталий Власов", 
    office: 1205, 
    profession: "Ruby Developer", 
    image: "https://yt3.ggpht.com/a/AATXAJyF-ZFpU6gVvU8GhfUypggKEFfi9AUMQDVluSIXog=s900-c-k-c0xffffffff-no-rj-mo",
		id: 5,
    mobile: "+375449896754",
    email: "VitalyVlasov@mail.com",
    skype: "VitalyVlasov",
    hireDate: "01.05.2019",
    status: "active"
    
   },
  { 
    login: 'Stepan',
    password: "12345",
    role: "user",
    nameEng: "Stepan Smirnov",
    nameRus: "Степан Смирнов",
    office: 1204,
    profession: "Python Developer",
    image: "https://static.tildacdn.com/tild3734-6666-4630-b734-376432356634/0030.jpg",
		id: 6,
    mobile: "+375441109078",
    email: "StepanSmirnov@mail.com",
    skype: "StepanSmirnov",
    hireDate: "10.04.2015",
    status: "active"
  }
];


function sortItems (arr, type) {
  const newPeople = arr.sort((prev, next) => prev.nameEng < next.nameEng ? type === 'asc' ? -1 : 1 : type === 'desc' ? -1 : 1);
  return newPeople;
}

function filterItems (arr, target) {
  return arr.filter(el => el.nameEng.toLowerCase().includes(target) || el.nameRus.toLowerCase().includes(target));
}

employeesRoute.route('/people').get((req, res) => {
	if (req.query.target !== undefined && req.query.type) {
		return res.json(sortItems(filterItems(people, req.query.target), req.query.type));
	}
	return res.json(people)
})

employeesRoute.route('/people').post((req, res) => {
  if (Object.keys(req.body).length <= 2) {
    const currentPerson = people.find(el => el.login === req.body.login && el.password === String(req.body.password))
    if (!currentPerson) {
      return alert(1)
    }
    return res.json(currentPerson)
  }
  else if (Object.keys(req.body).length > 3) {
    people.push(req.body)
    return res.json(people)
  }
})

employeesRoute.route('/people/:id').get((req, res) => {
	return res.json(people.find(el => el.id === +req.params.id));
})

module.exports = employeesRoute;
