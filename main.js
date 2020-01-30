//  Q1  arr.reduce()
//  answer is one item from the array
//  once avg is obtained, need toFixed(2) for correct decimal

let avgPrice = items.reduce(function(item1, item2) {
  return item1 + item2.price
}, 0)
avgPrice = (avgPrice / items.length).toFixed(2)
console.log(avgPrice)

var finalPrice = "The average price is $" + avgPrice

document.querySelector("#answer1").innerHTML = finalPrice

//  Q2 arr.filter()
//  answer is a smaller array of
//  use map() to change new array
//  add line breaks

let costs = items.filter(function(x) {
  return x.price > 14.0 && x.price < 18.0
})
let final = costs
  .map(function(item) {
    return item.title + "\n" + "\n"
  })
  .join("")
console.log(final)
document.querySelector("#answer2").innerHTML = final

//  Q3 arr.filter()
//  return smaller array
//  use map to change array
//  add strings

let pounds = items.filter(function(a) {
  return a.currency_code === "GBP"
})
let gPounds = pounds.map(function(item2) {
  return item2.title + " costs &pound;" + item2.price
})
console.log(gPounds)

document.querySelector("#answer3").innerHTML = gPounds

//  Q4 arr.filter()
//  return a small array
// return use map() to change array
//  add strings

let wood = items.filter(function(w) {
  return w.materials.includes("wood")
})
let titleWood = wood
  .map(function(z) {
    return z.title + " is made of wood." + "\n" + "\n"
  })
  .join("")
console.log(titleWood)

document.querySelector("#answer4").innerHTML = titleWood

//  Q5 arr.filter()
//  return a small array
// return use map() to change array
//  add strings

let eightMore = items.filter(function(mat) {
  return mat.materials.length >= 8
})
let finalEight = eightMore
  .map(function(item3) {
    return (
      item3.title +
      " has " +
      item3.materials.length +
      " materials:" +
      "\n\n" +
      item3.materials.join("\n") +
      "\n\n"
    )
  })
  .join("")
console.log(finalEight)
document.querySelector("#answer5").innerHTML = finalEight

//  Q6 arr.filter()
//  return a small array
//  return use map() to change array
//  add strings

let iMade = items.filter(function(me) {
  return me.who_made === "i_did"
})
var finalMade = iMade.length + " were made by their sellers"
console.log(finalMade)
document.querySelector("#answer6").innerHTML = finalMade
