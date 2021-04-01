const questionBoxes = document.querySelectorAll(".questionBox");
const answers = document.querySelectorAll(".answer");

questionBoxes.forEach(function (questionBox) {
  questionBox.addEventListener("click", runEvent);
});

function runEvent(e) {
  answers.forEach(function (answer) {
    if (answer.previousElementSibling === e.target) {
      removeClass(answer, "answer");
      addClass(answer.parentElement, "active"); //add active class on click
      addClass(
        answer.previousElementSibling.lastElementChild,
        "arrowtransform"
      );
      answer.style.paddingBottom = '10px';
      answer.previousElementSibling.firstElementChild.style.fontWeight = 'bolder';
      answer.className = 'animated'
    } else {
      removeClass(answer.parentElement, "active"); //remove active class if not clicked on
      addClass(answer, "answer");
      removeClass(
        answer.previousElementSibling.lastElementChild,
        "arrowtransform"
      );
      answer.previousElementSibling.firstElementChild.style.fontWeight = '';
    }
  });
}

//func to add class
function addClass(el, klass) {
  el.classList.add(klass);
}

//function to remove class

function removeClass(el, klass) {
  el.classList.remove(klass);
}
