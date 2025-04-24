// let i = 0
// const nextId = () => ++i

// console.log(nextId())

const o = { x: 42 }

const oo = o

// {}   new   Object.create(null)

o.x = 101

console.log(oo.x)

console.log(o === oo)

const array = [o]

array

array.push(o)

array.push(oo)

array

console.log(array[0])

console.log(array[1])

array[0].x = 333

console.log(array[1].x)

console.log(array[2].x)
