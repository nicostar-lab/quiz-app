const start_btn = document.getElementById("btn1");
const intro = document.getElementById("intro");
const body = document.getElementById("body");
const end = document.getElementById("end");
const interrogation = document.getElementById("interrogation");
const li = document.getElementsByTagName("li");
let thereResponse;
let score = 0;
let numQuest = 1;
const next_btn = document.getElementById("btn2");
next_btn.style.opacity = "0";
const displayScore = document.getElementById("score");
const displayNumQuest = document.getElementById("num_quest");
const displayEndScore = document.getElementById('endScore')
const restart = document.getElementById('btn3')
const displayComment = document.getElementById('comment')



const questions = [
  (quest2 = {
    quest: "Quel est le nom de la capitale de la France ?",
    responses: ["Paris", "Londres", "Berlin"],
    response: "Paris",
  }),
  (quest3 = {
    quest: "L'affirmation \"l'Egypte est un don du Nil\" est de:",
    responses: ["Aristote", "Hérodote", "Ramses II"],
    response: "Hérodote",
  }),
  (quest4 = {
    quest: "Le plus jeune Etat d'Afrique est",
    responses: ["Le Darfour", "Le Sahara", "Le Soudan du sud"],
    response: "Le Soudan du sud",
  }),
  (quest5 = {
    quest: 'Le monument de la "Renaissance Africaine" se trouve à:',
    responses: ["Dakar", "Addis-Abeba", "Harare"],
    response: "Dakar",
  }),
];
const quest1 = {
  quest: "Un ambidextre, c'est celui qui utilise aisement:",
  responses: ["La main gauche", "Les deux mains", "La main droite"],
  response: "Les deux mains",
};

start_btn.addEventListener("click", () => {
  intro.style.display = "none";
  body.style.display = "block";
});

function game(params) {
  interrogation.textContent = params.quest;
  
  for (let i = 0; i < li.length; i++) {
    const newLi = li[i].cloneNode(true);
    li[i].parentNode.replaceChild(newLi, li[i]);
  }


  const updatedLi = document.getElementsByTagName("li");

  for (let i = 0; i < updatedLi.length; i++) {
    updatedLi[i].textContent = params.responses[i];

    updatedLi[i].addEventListener("click", () => {
      for (let j = 0; j < updatedLi.length; j++) {
        updatedLi[j].style.backgroundColor = "";
      }
      next_btn.style.opacity = "1";

      if (updatedLi[i].textContent === params.response) {
        updatedLi[i].style.backgroundColor = "green";
        score += 1;
      } else {
        updatedLi[i].style.backgroundColor = "red";
      }
    });
  }
}
game(quest1);

let currentQuestionIndex = 0;
next_btn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    game(questions[currentQuestionIndex]);
    currentQuestionIndex++;
    numQuest += 1;
    displayNumQuest.textContent = numQuest;
    displayScore.textContent = score;
    for (let j = 0; j < li.length; j++) {
      li[j].style.backgroundColor = "";
    }
  } else {
    body.style.display = "none";
    end.style.display = "block";
    displayEndScore.textContent = score;
    if (score < 3){
      displayComment.textContent = 'Du courage réessayez encore une fois'
    } else  displayComment.textContent = 'Bien jouez!!!!'

  }
});

restart.addEventListener('click',()=>{
  
  
  score = 0  
  numQuest = 1
  currentQuestionIndex = 0
  
  displayScore.textContent = score 
  displayNumQuest.textContent = numQuest
  for ( j = 0; j < li.length; j++) {
      li[j].style.backgroundColor = "";
  }
  end.style.display = 'none'
  body.style.display = 'block'
  game(quest1)

  
})
