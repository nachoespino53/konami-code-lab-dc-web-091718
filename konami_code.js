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

let index = 0;




function init() {
  let index = 0;
  document.body.addEventListener('keydown', (e) => {
    let key = e.key;
    if (codes[index] === key) {
      if (index === codes.length - 1){
        window.alert("Hurray!");
        idx = 0
      } else {
        index++;
      }
    } else {
      index = 0;
    }
  });
}
