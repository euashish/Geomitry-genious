function calculateRectangleArea() {
  // get length of the rectangle
  const lengthInput = document.getElementById("rectangle-length");
  const lengthText = lengthInput.value;
  const length = parseFloat(lengthText);
  lengthInput.value = "";
  // console.log(length);

  // get width of the rectangle
  const widthInput = document.getElementById("rectangle-width");
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  widthInput.value = "";
  // console.log(width)

  // display rectangle area

  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = length * width;
}
