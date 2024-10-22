let sam = {
    name: "sam",
    age: 25,
    designation: "Developer"
}

let richard = {
    name: "sam",
    age: 25,
    designation: "Developer"
}

let tom = {
    school: "MUE",
    age: 12,
    subject: "Science"
}

//compare 2 objects
let compare = (obj1, obj2) => {
    let index = 0
    let keys = Object.keys(obj1)
    return keys.every(val => obj2.hasOwnProperty(val) && obj1[val] === obj2[val])
   
}

console.log(compare(sam, tom))