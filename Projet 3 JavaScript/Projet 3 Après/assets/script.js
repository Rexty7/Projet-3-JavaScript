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
]

// Je créer la boucle des bulletpoint avec le for, la boucle commence a 0 et fait +1 a chaque tour, je crée la variable dot,
// si i = 0 on lui attribut les classes dot et dot selected sinon on lui attribut juste la classe dot,
// on selectionne la classe dots pour lui appenchild(créer un enfant) la variable dot(celle qui crée la span ligne 25),

for ( let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span"); 
	if (i == 0) {
		dot.setAttribute("class", "dot dot_selected" );
	} else {
		dot.setAttribute("class", "dot");
	}
	document.querySelector(".dots").appendChild(dot);
}

let indice = 0;

let arrowleft = document.getElementById("arrowleft");
arrowleft.addEventListener("click", function () {

	let current = indice

	// si l'indice arrive a 0, au prochain click revenir a slide.length(4) -1 = 3(donc revenir a la derniere image),
	// sinon juste faire -1 a l'indice
	if (indice === 0) {
		indice = slides.length - 1
	} else {
		indice = indice - 1
	}

	// Ajout de la fonction ligne 72
	slider(current,indice)
});


let arrowright = document.getElementById ("arrowright");
arrowright.addEventListener("click", function () {
	
	let current = indice
	
	// si l'indice est supérieur ou egal a sildes.length(4) -1 = 3, au prochain click revenir a 0(donc premiere image),
	// sinon juste faire +1 a l'indice
	if (indice >= slides.length - 1) {
		indice = 0
	} else {
		indice = indice + 1
	}

	// Ajout de la fonction ligne 72
	slider(current,indice)

});

function slider(current,indice){

	// créer une variable image qui récupère la balise img du html par rapport a sa classe css

	let image = document.querySelector (".banner-img");

	// Je créer variable objet(les objets par rapport a l'indice du tableau),
	// et url(concaténation du début de l'url des images et la propriéte image des objets du tableau)

	let objet = slides[indice];
	let url = `./assets/images/slideshow/${objet.image}`;

	// je change l'attribu de la variable image avec la variable url(lire ligne 75)
	image.setAttribute("src", url);

	// créer une variable tagline qui Recup le texte des objets dans le tableau
	let tagLine = objet.tagLine;

	// créer une variable qui recupere la balise p avec sa classe css (.tagline)
	let p = document.querySelector(".tagLine");
	
	// change le text de la tagline en fonction de l'indice avec innerHTML
	p.innerHTML = tagLine;

	// créer une constante qui récupère tout les dot avec la fonction querySelectorALL
	const dots = document.querySelectorAll(".dot");

	// avec mon tableau de dot je reucp le courant et j'enleve la class dot_selected
	let currentDot = dots[current];
	currentDot.classList.remove('dot_selected');

	// je recup le next ou le previous et j'ajoute la class dot_selected
	let nextOrPreviousDot = dots[indice];
	nextOrPreviousDot.classList.add('dot_selected');
}