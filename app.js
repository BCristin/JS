"use strict";
//#region //! T.A 1
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на
 вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
//! de ici se incepe codul pt T.A
/*
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movie: {},
	actors: {},
	genres: [],
	privat: false,
};

let a = prompt("Один из последних просмотренных фильмов?", ""),
	b = prompt("На сколько оцените его?", ""),
	c = prompt("Один из последних просмотренных фильмов?", ""),
	d = prompt("На сколько оцените его?", "");

personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;
console.table(personalMovieDB);*/
//#endregion

//#region //! T.A 2
/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
//! de ici se incepe codul pt T.A
/*
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
	count: numberOfFilms,
	movie: {},
	actors: {},
	genres: [],
	privat: false,
};

if (personalMovieDB.count <= 10) {
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько оцените его?", "");
	if (a != null && a != "" && b != null && b != "" && a.length < 50) {
		personalMovieDB.movie[a] = b;
	} else {
		i--;
	}
}

console.log(personalMovieDB);
console.table(personalMovieDB.movie);*/

//#endregion

//#region //! T.A 3
/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. 
Если стоит в позиции false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres
P.S. Функции вызывать не обязательно */

let numberOfFilms = 0;
const personalMovieDB = {
	count: numberOfFilms,
	movie: {},
	actors: {},
	genres: [],
	privat: false,
};

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
	personalMovieDB.count = numberOfFilms;
}
function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последних просмотренных фильмов?", ""),
			b = prompt("На сколько оцените его?", "");
		if (a != null && a != "" && b != null && b != "" && a.length < 50) {
			personalMovieDB.movie[a] = b;
		} else {
			i--;
		}
	}
}
function detectPersonalLevel() {
	console.log(personalMovieDB);
	if (personalMovieDB.count <= 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}
function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB.privat);
writeYourGenres();
console.log(personalMovieDB);

// let str = "bleadi suca zaibala tat huineaua asta";
// let index = str.indexOf("tat");
// console.log(str.slice(index));
// console.log(7);
//#endregion
