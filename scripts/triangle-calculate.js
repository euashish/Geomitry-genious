/**
 * Objective: get base , height of a triangle . Calculate the area bby using the provided formula. and then display the area.
 * step-1: get base value
 * step-2:
 *
 */
function calculateTriangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  triangleBaseInput.value = "";
  //    console.log( base)

  // get triangle height value

  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  triangleHeightInput.value = "";
  // console.log(height)

  // calculate triangle area
  const area = 0.5 * base * height;
  // console.log(area)

  // display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}
