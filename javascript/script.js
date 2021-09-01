//connect it to html element.
const button = document.querySelector(`.container button`);
const jokeText = document.querySelector(`.container p`);
document.addEventListener(`DOMContentLoaded`,getJoke)
 //Add click button
button.addEventListener('click', getJoke);
//fectch url
 async function getJoke()  {
 const jokeData = await fetch(`https://icanhazdadjoke.com/ `,{
     headers:{
        "Accept": "application/json"
     }
 });
 //await json
 const jokeObj = await jokeData.json();
 jokeText.innerHTML = jokeObj.joke;

}

