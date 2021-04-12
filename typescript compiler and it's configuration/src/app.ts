const button = document.querySelector('button');

function clickHandler() {
    console.log('Clicked!')
}

// a comment
if( button ) {
    button.addEventListener('click', clickHandler.bind(null))
}