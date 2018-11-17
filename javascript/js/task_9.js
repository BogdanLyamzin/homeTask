function getBirthDay(date) {    let result = '';    let animal = '';    let dat = new Date();// встановлення об'єкта дати по введеним даним    dat.setHours(0, 0, 0, 0);    dat.setMonth(`${date.slice(3, 5)}` - 1);    dat.setDate(`${date.slice(0, 2)}`);    dat.setFullYear(`${date.slice(6)}`);    let num = Date.parse(dat);    const zodiac = [        {name: 'Овен', date: '21.03 - 20.04'},        {name: 'Телец', date: '21.04 - 21.05'},        {name: 'Близнецы', date: '22.05 - 21.06'},        {name: 'Рак', date: '22.06 - 22.07'},        {name: 'Лев', date: '23.07 - 21.08'},        {name: 'Дева', date: '22.08 - 23.09'},        {name: 'Весы', date: '24.09 - 23.10'},        {name: 'Скорпион', date: '24.10 - 22.11'},        {name: 'Стрелец', date: '23.11 - 22.12'},        {name: 'Козерог', date: '23.12 - 20.01'},        {name: 'Водолей', date: '21.01 - 19.02'},        {name: 'Рыбы', date: '20.02 - 20.03'}    ];    const chinaAnimals = [        {name: 'Крыса', year: 4},        {name: 'Бык', year: 5},        {name: 'Тигр', year: 6},        {name: 'Кролик', year: 7},        {name: 'Дракон', year: 8},        {name: 'Змея', year: 9},        {name: 'Лошадь', year: 10},        {name: 'Коза', year: 11},        {name: 'Обезьяна', year: 0},        {name: 'Петух', year: 1},        {name: 'Собака', year: 2},        {name: 'Свинья', year: 3}    ];    chinaAnimals.forEach(function (item) {        let year = dat.getFullYear();        if (Object.is(year % 12, item.year)) {            animal = item.name;        }    });// parseDate() переводить дату в мілісекунди    const parseDate = num => Date.parse(`${dat.getFullYear()}.${num}`);// splitDate() повертає значення дати в порядку mm.dd    function splitDate(keys) {        let arrFilter = keys.split(' - ');        for (let j = 0; j < arrFilter.length; j++) {            arrFilter[j] = arrFilter[j].split('.').reverse().join('.');        }        return arrFilter;    }    zodiac.forEach(function (item) {        for (let key in item) {            if (Object.is(key, 'date')) {                let arrFilter = splitDate(item[key]);                if ((parseDate(arrFilter[0]) <= num) && (num <= parseDate(arrFilter[1]))) {                    result = item.name;                } else if (Object.is(arrFilter[0], '12.23')) {                    if ((parseDate(arrFilter[0]) <= num) && (num <= parseDate('12.31'))) {                        result = item.name;                    } else if ((parseDate('01.01') <= num) && (num <= parseDate(arrFilter[1]))) {                        result = item.name;                    }                }            }        }    });    let age = new Date();    dat = Math.floor((age - dat) / (365 * 24 * 60 * 60 * 1000));    return [dat, result, animal];}let birthDay = prompt('Введите Вашу дату рождения в формате dd.mm.yyyy');// let birthDay = '11.07.1082';let [year, zodiac, animal] = getBirthDay(birthDay);confirm(`Вам ${year} лет/года!`);confirm(`Ваш знак зодиака ${zodiac}!`);confirm(`Вы ${animal} по китайскому календарю!`);console.log(year);console.log(zodiac);console.log(animal);