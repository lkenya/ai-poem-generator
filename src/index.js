function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "        Oh, the autumn breeze, it whispers low",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("click", generatePoem);