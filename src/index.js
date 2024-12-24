function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "742440b0cce3a3ff6951315a0501t0ob";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic expert and love to write short poems.Your mission is to generate a 4 line poem with basic HTML and separate each line with a <br />. Do not use a title. Make sure to follow the user instructions below:.Sign the poem with 'SheCodes AI' inside a <strong></strong> element at the end of the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating  poem about ${instructionsInput.value}</div>`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
