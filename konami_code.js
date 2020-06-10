const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

  var index = 0
  document.body.addEventListener('keydown', handleKey);

  function handleKey(event) {

    if (event.key === code[index]) {
      index++
      if (index === code.length) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }
}

init()
