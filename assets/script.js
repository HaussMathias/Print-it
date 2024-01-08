const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
let bannerImg = document.querySelector(".banner-img");
let banner = document.querySelector("#banner > p");
let dots = document.querySelector(".dots");
let images = 0;


arrow_left.addEventListener("click", () => {
	if (images == 0) {
		images = slides.length - 1
		bannerImg.src = "./assets/images/slideshow/" + slides[images].image;
		banner.innerHTML = slides[images].tagLine;
		dots.children[0].classList.toggle("dot_selected");
		dots.children[images].classList.toggle("dot_selected");
	}
	else {
		images--;
		bannerImg.src = "./assets/images/slideshow/" + slides[images].image;
		banner.innerHTML = slides[images].tagLine;
		dots.children[images + 1].classList.toggle("dot_selected");
		dots.children[images].classList.toggle("dot_selected");
	}
	
});


arrow_right.addEventListener("click", () => {
	if (images == slides.length - 1) {
		images = 0
		bannerImg.src = "./assets/images/slideshow/" + slides[images].image;
		banner.innerHTML = slides[images].tagLine;
		dots.children[slides.length - 1].classList.toggle("dot_selected");
		dots.children[images].classList.toggle("dot_selected");
	}
	else {
		images++;
		bannerImg.src = "./assets/images/slideshow/" + slides[images].image;
		banner.innerHTML = slides[images].tagLine;
		dots.children[images - 1].classList.toggle("dot_selected");
		dots.children[images].classList.toggle("dot_selected");
	}
	
});


const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

for (let i = 0; i < slides.length; i++) {
	dots.innerHTML += '<p class="dot"></p>'
};

dots.children[images].classList.add("dot_selected");
