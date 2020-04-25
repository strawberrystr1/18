'use strict';

const date = new Date(),
    nextDate = new Date('January 1, 2021'),
    msPerDay = 24 * 60 * 60 * 1000;
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const getHours = date.getHours(),
    getDay = date.getDay(),
    daysLeft = Math.round((nextDate.getTime() -
    date.getTime()) / msPerDay);
if (getHours < 6) {
    document.write('Доброй ночи ');
} else if (getHours < 10) {
    document.write('Доброе утро ');
} else if (getHours < 18) {
    document.write('Добрый день ');
} else if (getHours < 23) {
    document.write('Добрый вечер ');
}

document.write(`Сегодня: ${days[getDay]} `);

document.write(`Текущее время: ${date.toLocaleTimeString('en')} `);

document.write(`До нового года осталось: ${daysLeft}`);
