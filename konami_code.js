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

var event = document.body.addEventListener("keydown", init)

var accumulator = 0

let init = function (event) {
  if (event.key !== codes[accumulator]){
    accumulator = 0
    return
  }

  accumulator++

  if (codes.length === accumulator){
    window.alert("Hurray!")
  }
}

// var event = document.body.addEventListener("keydown", init)
