const ref = {
  controls: document.querySelector('#controls'),
  input: controls.firstElementChild,
  boxes: document.querySelector('#boxes'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
};

ref.input.addEventListener("change", (numSelect));

function numSelect() {
  if (ref.input.value > 100) {
    alert("Max 100");
    ref.input.value = 100;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {

  const boxCount = ref.input.value;

  for (let i = 0; i < boxCount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = (30 + (10 * i)) + 'px';
      box.style.height = (30 + (10 * i)) + 'px';
      ref.boxes.appendChild(box);
    }
}

boxes.style.cssText = "display: flex; flex-direction: column; align-items: center;"

ref.createButton.addEventListener('click', createBtnClick);

function createBtnClick() {
    createBoxes()
};

function destroyBoxes() {
  let child = ref.boxes.lastElementChild;
  while (child) {
    ref.boxes.removeChild(child);
    child = ref.boxes.lastElementChild;
  }
}

ref.destroyButton.addEventListener('click', destroyBtnClick);

function destroyBtnClick() {
  destroyBoxes()
};


// Write a script to create and clear a collection of elements.
// The user enters the number of elements into input and clicks 
// the New button, after which a collection is rendered.When 
// you click on the Clear button, the collection is cleared.

// Create a createBoxes(amount) function that takes one
// parameter, a number.The function creates as many < div > as
// specified in amount and adds them to div#boxes.

// The dimensions of the very first < div > are 30px by 30px.

// Each element after the first one should be 10px wider and 
// higher than the previous one.

// All elements must have a random HEX background color.Use 
// the ready - made getRandomHexColor function to get a
// color.