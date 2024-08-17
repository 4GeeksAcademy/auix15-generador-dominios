import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["my", "the", "our"];
  let adj = ["fast", "danger", "dark"];
  let noun = ["fani", "radio", "alien"];
  let extension = [".com", ".net", ".org"];

  let domains = [];
  let currentIndex = 0;

  function generateDomains() {
    let result = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let e of extension) {
            result.push(`${p}${a}${n}${e}`);
          }
        }
      }
    }
    return result;
  }

  function displayDomain() {
    let listDomains = document.getElementById("listaDeDominios");

    if (currentIndex < domains.length) {
      listDomains.innerHTML = "";
      let domain = domains[currentIndex];
      let li = document.createElement("li");
      li.textContent = domain;
      listDomains.appendChild(li);
      currentIndex++;
    }

    if (currentIndex >= domains.length) {
      let generateBtn = document.getElementById("generateBtn");
      generateBtn.disabled = true;
      generateBtn.textContent = "No hay más dominios";
    }
  }

  domains = generateDomains();

  let generateBtn = document.getElementById("generateBtn");
  if (generateBtn) {
    generateBtn.addEventListener("click", displayDomain);
  } else {
    console.error(
      "El botón con ID 'generateBtn' no se encontró en el documento."
    );
  }
};

// console.log("Hello Rigo from the console!");
