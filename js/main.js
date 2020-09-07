let gif = ["https://media.giphy.com/media/ckKf5lA78k5iChxfVz/giphy.gif", "https://media.giphy.com/media/kPIswn0RfPTGxOvDj5/giphy.gif",
"https://media.giphy.com/media/ItAmGFb0uiZz2/giphy.gif",
"https://media.giphy.com/media/l4pSWuKRDu2h1VpsI/giphy.gif",
"https://media.giphy.com/media/fWgPzLGeI4okiaG8QT/giphy.gif",
"https://media.giphy.com/media/ZFPefIMma1qw0/giphy.gif",
"https://media.giphy.com/media/cD7PLGE1KWOhG/giphy.gif"];

let jokes = {
  img: document.getElementById('img'),
  btnGenerate: document.getElementById('generate'),
  setUp: document.getElementById("setUp"),
  punchLine: document.getElementById("punchLine"),
  btnReveal: document.getElementById('reveal'),
  btnClear: document.getElementById('clear'),
  getJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => {
        jokes.btnGenerate.style.display = "none";
        jokes.btnReveal.style.display ="inline";
        jokes.setUp.innerHTML = data.setup;
        jokes.btnReveal.addEventListener("click", ()=>{
          jokes.btnReveal.style.display ="none";
          jokes.btnClear.style.display = "inline";
          jokes.img.style.display = "inline";
          let num = Math.floor((Math.random() *6));
          jokes.img.src= gif[num];
          jokes.punchLine.innerHTML = data.punchline;

        });
    })
  },
  clearJoke(){
    jokes.punchLine.innerHTML = "";
    jokes.btnClear.style.display = "none";
    jokes.btnGenerate.style.display = "none";
    jokes.btnReveal.style.display = "none";
    jokes.img.style.display = "none";
    jokes.getJoke();
  }
}
jokes.btnGenerate.addEventListener("click", jokes.getJoke);
jokes.btnClear.addEventListener("click", jokes.clearJoke);
