function calculateParallelogramArea() {
  const baseInput = document.getElementById("parallelogram-base");
  const baseText = baseInput.value;
  const base = parseFloat(baseText);
  baseInput.value = "";
  //  console.log(base)

  const heightInput = document.getElementById("parallelogram-height");
  const heightText = heightInput.value;
  const height = parseFloat(heightText);
  heightInput.value = "";
  //  console.log(height)

  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  const result = base * height;
  parallelogramAreaSpan.innerText = result;
}
