console.log('Hello world')
const message = document.querySelector('#message')

const addMovie = evt => {
    evt.preventDefault();
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)
    



    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

const deleteMovie = evt => {
    evt.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = evt => {
    evt.target.classList.toggle('checked')
    if(evt.target.classList.contains('checked') === true){
        message.textContent = 'Movie Watched!'
    }else{
        message.textContent = 'Movie added back!'
    }
}



document.querySelector('form').addEventListener('submit', addMovie);
console.log(addMovie)


const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(hidemessage, 1000)

}

const hidemessage = () => {
    message.classList.add('hide')
}