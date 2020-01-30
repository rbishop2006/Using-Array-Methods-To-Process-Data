//Q1  arr.reduce()

let avgPrice = items.reduce(function(item1, item2) {
  return item1 + item2.price
}, 0)
avgPrice = (avgPrice / items.length).toFixed(2)
console.log(avgPrice)

document.querySelector("#answer1").innerHTML = avgPrice

//Q2 arr.filter()

let costs = items.filter(function(x) {
  return x.price > 14.0 && x.price < 18.0
})
let final = costs
  .map(function(item) {
    return item.title + "\n"
  })
  .join("")
console.log(final)
document.querySelector("#answer2").innerHTML = final

//Q3 arr.filter()

let pounds = items.filter(function(a) {
  return a.currency_code === "GBP"
})
let gPounds = pounds.map(function(item2) {
  return item2.title + " costs &pound;" + item2.price
})
console.log(gPounds)

document.querySelector("#answer3").innerHTML = gPounds

//Q4 arr.filter()

let wood = items.filter(function(w) {
  return w.materials.includes("wood")
})
let titleWood = wood
  .map(function(z) {
    return z.title + "\n"
  })
  .join("")
console.log(titleWood)

document.querySelector("#answer4").innerHTML = titleWood

//Q5 arr.filter()

let eightMore = items.filter(function(mat) {
  return mat.materials.length >= 8
})
console.log(eightMore)

//Q6 arr.reduce()
