function displayPoem(response) {
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey="8a84a250d94e12ocbbetef4209917359";
let prompt= `User instructions: generate a poemm about ${instrctuinsInput.value}`;
let context = "You are a short poem expert. Your mission is to generate a 4 lines poem in basi HTML following the user instructions.";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key={key}`;

axios.get(apiUrl).then(displayPoem);
    
   
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);s