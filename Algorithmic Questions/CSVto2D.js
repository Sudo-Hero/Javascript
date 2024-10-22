let csv = `Name,Age,Designation
yash,25,Developer
Ram,26,CEO
sham,30,Sales`

let array = csv.split("\n")
let CSV2D = [];
array.forEach((element, index) => {
    CSV2D[index] = element.split(",")
});

console.log(CSV2D)
