// You are given an m x n matrix of characters box representing a side-view of a box. Each cell of the box is one of the following:

// A stone '#'
// A stationary obstacle '*'
// Empty '.'
// The box is rotated 90 degrees clockwise, causing some of the stones to fall due to gravity. Each stone falls down until it lands on an obstacle, another stone, or the bottom of the box. Gravity does not affect the obstacles' positions, and the inertia from the box's rotation does not affect the stones' horizontal positions.

// It is guaranteed that each stone in box rests on an obstacle, another stone, or the bottom of the box.

// Return an n x m matrix representing the box after the rotation described above.

let boxes = [
  ["#", "#", "*", ".", "*", "."],
  ["#", "#", "#", "*", ".", "."],
  ["#", "#", "#", ".", "#", "."],
];

function arrangeElement(element) {
  let temp = [];
  let result = [];
  for (let i = element.length - 1; i >= 0; i--) {
    if (element[i] == "*") {
      temp.unshift(element[i]);
      result = [...temp, ...result];
      temp.length = 0;
    } else {
      temp[element[i] === "#" ? "push" : "unshift"](element[i]);
      if (!i) {
        result = [...temp, ...result];
      }
    }
  }
  return result;
}

function verticalizing(horizontalArray) {
  const result = [];
  for (let col = 0; col < horizontalArray[0].length; col++) {
    let temp = [];
    for (let row = horizontalArray.length - 1; row >= 0; row--) {
      temp.push(horizontalArray[row][col]);
    }
    result.push(temp);
  }
  return result;
}

let arranged = boxes.map((bx) => arrangeElement(bx));
let vertical = verticalizing(arranged);
console.log(arranged, vertical);
