let csv = `Name,Age,Designation,Lang
yash,25,Developer,Java
Ram,26,CEO,Python
sham,30,Sales,C++
Bhuvan,22,YT,N/A`

CSV2D = []
let arr = csv.split("\n")
let title = arr[0].split(",")

arr.shift()
arr.forEach((elem, index) => {
    CSV2D[index] = {}
    let values = elem.split(",")
    values.forEach((val, titleIndex) => {
        CSV2D[index][title[titleIndex]] = val;
    })
})

console.log(CSV2D)