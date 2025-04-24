const array = []

let x = 42
let y = 101
let i = 333

function createObjectByX() {
  const createdObject = { x, y, i }
  array.push(createdObject)
}

createObjectByX()
createObjectByX()
createObjectByX()

array

array[0].x = 0

array

console.log(array[1].x)

console.log(array[2].x)
