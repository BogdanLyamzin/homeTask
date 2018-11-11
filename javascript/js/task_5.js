let capital = {    europe: {        ukraine: {            'kyivska oblast': [12, 23, 34, 45, 56]        }    },    america: ['Washington', 'Ottawa', 'Mexico'],    france: 'Paris',    italy: 'Rome',    asia: {        india: 'Delhi',        japan: 'Tokyo',        china: 'Beijing'    }};let country = {    name: "Швейцария",    languages: ["немецкий", "французский", "итальянский"],    capital: {        name: "Берн",        population: 126598    },    cities: [        {name: "Цюрих", population: 378884},        {name: "Женева", population: 188634},        {name: "Базель", population: 164937}    ]};let array = [12, 23, 34];function cloneName(objToClone = {}) {    if ((typeof objToClone) !== `object`) {        return;    }    let clone = {};    if (Array.isArray(objToClone)) { // якщо в функцію параметром буде переданий масив, то він зпрацює тут        return clone = JSON.parse(JSON.stringify(objToClone));    }    for (let key in objToClone) {        if ((objToClone[key] instanceof Object) && !(Array.isArray(objToClone[key]))) {            clone[key] = cloneName(objToClone[key]);        } else if (Array.isArray(objToClone[key])) {            clone[key] = JSON.parse(JSON.stringify(objToClone[key]));        } else {            clone[key] = objToClone[key];        }    }    return clone;}let clonedCapital = cloneName(capital);capital.america[1] = 'New York';capital.europe.ukraine['kyivska oblast'] = 'Brovary';console.log(clonedCapital);console.log(capital);let clonedCountry = cloneName(country);console.log(clonedCountry);let clonedArray = cloneName(array);array[1] = 12345678;console.log(array);console.log(clonedArray);