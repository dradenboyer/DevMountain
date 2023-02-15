console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function mouse(evt){
	evt.preventDefault()
	alert('this is a rubber duck giving you a high five')
}

let img = document.querySelector('img')
img.addEventListener('mouseover', mouse)


