function filterCollection(array, stringFilter, boolean, path1) {    let arrayFil = JSON.parse(JSON.stringify(array).toLowerCase());    // console.log(arrayFil);    // let pathArray = path1.split('.');    let result = [];    // console.log(result);    let string = stringFilter.toLowerCase().split(' ');    console.log(string);    //todo    arrayFil.forEach(function search(item, i) {        for (let key in item) {            if ((item[key] instanceof Object) && !(Array.isArray(item[key]))) {                search(item[key], i);            }            string.forEach(function (item2) {                if (Array.isArray(item[key])) {                    item[key].forEach(function search2(arItems) {                        for (let key2 in arItems) {                            if ((arItems instanceof Object) && !(Array.isArray(arItems))) {                                search2(arItems[key2]);                            }                            if (Object.is(arItems, item2)) {                                result.push(array[i]);                                // result[i] = JSON.parse(JSON.stringify(array[i]));                                return;                            }                        }                    });                } else if (Object.is(item[key], item2)) {                    result.push(array[i]);                    // result[i] = JSON.parse(JSON.stringify(array[i]));                }            });        }    });    return result;}let vehicles = [{    locales: [{local: 'en_US'}, {local:   'nl-Be'}, {local: 'de-Qt'}, {local: 'de-At'}],    name: 'Toyota',    description: {        color: 'red',        local: 'eQ_US'    }},    {        color: 'white',        locales: ['nl-Be', 'fr-Be', 'de-Qt'],        name: 'Toyota',        description: {            color: 'white',            local: 'fr-We'        }    },    {        locales: ['nl-ye', 'fr-Be', 'de-Qt'],        name: 'Mazda',        description: {            color: 'white',            local: 'fr-We'        }    },    {        locales: ['nl-Be', 'fr-Be', 'dp-Qt'],        name: 'Mazda',        description: {            color: 'black',            local: 'fr-We'        }    }];let collection = filterCollection(vehicles, 'black', false, 'description.local');console.log(collection);