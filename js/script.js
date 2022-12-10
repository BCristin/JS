//#region  //! T.A 5

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";
//! codul incepe de ici
// const movieDB = {
// movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
// };
// const poster = document.querySelector(".promo__bg");
// const genre = poster.querySelector(".promo__genre");
// const movieList = document.querySelector(".promo__interactive-list");
// const adv = document.querySelectorAll(".promo__adv img");

// adv.forEach((item) => {
// 	item.remove();
// });

// genre.innerHTML = "драма".toUpperCase();
// poster.style.backgroundImage = " url('img/bg.jpg') ";

// function sortMovie() {
// 	movieDB.movies.sort();
// }
// sortMovie();

// function addMovie() {
// 	movieList.innerHTML = "";
// 	movieDB.movies.forEach((item, i) => {
// 		movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}.
//    ${item}   <div class="delete"></div>   </li>`;
// 	});
// }
// addMovie();
//#endregion

//#region  //! T.A 6
/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// urmareste ca codul js sa se faca dupa ce se creaza pagina
document.addEventListener("DOMContentLoaded", () => {
	const movieDB = {
		movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
	};
	const adv = document.querySelectorAll(".promo__adv img");
	const poster = document.querySelector(".promo__bg");
	const genre = poster.querySelector(".promo__genre");
	const movieList = document.querySelector(".promo__interactive-list");

	function deleteAdv() {
		adv.forEach((item) => {
			item.remove();
		});
	}
	function makeChanges() {
		genre.innerHTML = "драма".toUpperCase();
		poster.style.backgroundImage = " url('img/bg.jpg') ";
	}
	function sortMovie(arr) {
		arr.sort();
	}
	function createMovieList(films, parent) {
		parent.innerHTML = "";
		sortMovie(films);

		films.forEach((item, i) => {
			parent.innerHTML += `<li class="promo__interactive-item">
                                    ${i + 1}. ${item}   
                                    <div class="delete"></div>   
                                 </li>`;
		});

		const deleteBtn = document.querySelectorAll(".delete");
		deleteBtn.forEach((btn, i) => {
			btn.addEventListener("click", () => {
				// btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(films, parent);
			});
		});
	}

	const form = document.querySelector("form.add");
	const addInput = form.querySelector(".adding__input");
	const checkBox = form.querySelector("[type='checkbox']");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		let newFilm = addInput.value;
		if (newFilm) {
			if (newFilm.length > 22) {
				newFilm = newFilm.substr(0, 22) + "...";
			}
			if (checkBox.checked) {
				console.log("Добавляем любимый фильм");
			}
			movieDB.movies.push(newFilm);
			sortMovie(movieDB.movies);
			createMovieList(movieDB.movies, movieList);
		}
		event.target.reset();
	});
	deleteAdv();
	makeChanges();
	createMovieList(movieDB.movies, movieList);
});
//#endregion
