const starterItems = [
  { name: "Cull", gold: 450, image: "" },
  { name: "Dark Seal", gold: 350, image: "" },
  { name: "Doran's Blade", gold: 450, image: "" },
  { name: "Doran's Ring", gold: 400, image: "" },
  { name: "Doran's Shield", gold: 450, image: "" },
  { name: "Gustwalker Hatchling", gold: 450, image: "" },
  { name: "Mosstomper Seedling", gold: 450, image: "" },
  { name: "Scorchclaw Pup", gold: 450, image: "" },
  { name: "Tear of the Goddess", gold: 400, image: "" },
  { name: "World Atlas", gold: 400, image: "" },
];

const basicItems = [
  { name: "Amplifying Tome", gold: 400, image: "" },
  { name: "B.F Sword", gold: 1300, image: "" },
  { name: "Blasting Wand", gold: 850, image: "" },
  { name: "Cloak of Agility", gold: 600, image: "" },
  { name: "Cloth Armor", gold: 300, image: "" },
  { name: "Dagger", gold: 250, image: "" },
  { name: "Faerie Charm", gold: 200, image: "" },
  { name: "Glowing Mote", gold: 250, image: "" },
  { name: "Long Sword", gold: 350, image: "" },
  { name: "Needlessly Large Rod", gold: 1200, image: "" },
  { name: "Null-Magic Mantle", gold: 450, image: "" },
  { name: "Pickaxe", gold: 875, image: "" },
  { name: "Rejuvenation Bead", gold: 300, image: "" },
  { name: "Ruby Crystal", gold: 400, image: "" },
  { name: "Sapphire Crystal", gold: 300, image: "" },
];

const epicItems = [
  {
    name: "Aether Wisp",
    recipeItems: [basicItems.at(0).name],
    recipeText: "Amplifying Tome + 500",
    gold: 900,
    image:
      "https://wiki.leagueoflegends.com/en-us/images/Aether_Wisp_item.png?6cebd",
  },
  {
    name: "Bami's Cinder",
    recipeItems: [basicItems.at(13).name, basicItems.at(7).name],
    recipeText: "Ruby Crystal + Glowing Mote + 250",
    gold: 900,
  },
  {
    name: "Bandleglass Mirror",
    recipeItems: [
      basicItems.at(6).name,
      basicItems.at(0).name,
      basicItems.at(7).name,
    ],
    recipeText: "Faerie Charm + Amplifying Tome + Glowing Mote + 50",
    gold: 900,
  },
];

const btnQuiz1 = document.getElementById("quiz1");
const btnQuiz2 = document.getElementById("quiz2");
const quizContainer = document.getElementById("quiz");

let currentQuiz = epicItems;
quiz();

btnQuiz1.addEventListener("click", () => {
  quizContainer.innerHTML = "";
  currentQuiz = epicItems;
  quiz();
});

btnQuiz2.addEventListener("click", () => {
  quizContainer.innerHTML = "";
  currentQuiz = basicItems;
  quiz();
});

function quiz() {
  currentQuiz.forEach((item, index) => {
    const hiddenClass = index === 0 ? "" : "hidden";

    quizContainer.innerHTML += `
    <div class="quizSingle ${hiddenClass}" id="domanda-${index}">
      <p class= "quizQuestion">Con quale item crei <span class="breathingItem">${item.name}</span>?</p>
      <img src="${item.image}" class="quizImage">
      <input type="text" id="input-${index}" placeholder="Ingredienti...">
      <button onclick="checkAnswer(${index})">Invia</button>
      <div id="risultato-${index}"></div>
      <hr>
    </div>
  `;
  });
}

function checkAnswer(index) {
  const inputText = document.getElementById(`input-${index}`);
  const inputTextValue = inputText.value;
  const correctItem = currentQuiz[index].recipeItems;
  const feedback = document.getElementById(`risultato-${index}`);

  const currentQuestion = document.getElementById(`domanda-${index}`);
  const nextQuestion = document.getElementById(`domanda-${index + 1}`);

  let userAnswer = inputTextValue.split(",").map((i) => i.trim());
  let stringAnswer = [...userAnswer].sort().join(",");
  let stringSolution = [...correctItem].sort().join(",");

  const btn = currentQuestion.querySelector("button");
  btn.disabled = true;
  inputText.disabled = true;

  if (stringAnswer === stringSolution) {
    feedback.innerHTML = "Corretto";
    feedback.style.color = "green";
  } else {
    feedback.innerHTML = `Sbagliato! Era: ${correctItem.join(", ")}`;
    feedback.style.color = "red";
  }

  setTimeout(() => {
    currentQuestion.classList.add("hidden");
    if (nextQuestion) {
      nextQuestion.classList.remove("hidden");
    } else {
      quizContainer.innerHTML = `<h2>Quiz Completato! Ben fatto.</h2>`;
    }
  }, 2500);
}

/**
 for (const item of starterItems) {
  let num = prompt(`Quanto costa ${item.name}?`);

  if (Number(num) === item.gold) {
    alert("Corretto");
  } else {
    alert("Sbagliato");
  }
}
*/
