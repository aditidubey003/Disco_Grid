let div = document.querySelector('.boxes')

for(let i = 1; i <= 500; i++){
let smallBox = document.createElement('div')
smallBox.classList.add('disco-box') 
let p = document.createElement('p')
//p.classList.add('p')
smallBox.append(p)

div.append(smallBox)
}


//let allBoxes = document.querySelectorAll('.disco-box')

let btn = document.querySelector('.click')
btn.addEventListener("mouseover", function(){
  let allBoxes = document.querySelectorAll('.disco-box')
 allBoxes.forEach((box) => {
 box.style.backgroundColor = getRandomRGB()
 box.innerText = getRandomNumber()
 })

})


function getRandomRGB (){
    const value1 = Math.floor(Math.random()*256)
   // console.log(value1)
   const value2 = Math.floor(Math.random()*256)
   const value3 = Math.floor(Math.random()*256)
   let rgb = `rgb(${value1}, ${value2}, ${value3})`
   //console.log(rgb)
   return rgb

}
 

function getRandomNumber(){
  const number = Math.floor(Math.random()*500)
  console.log(number)
  return number
}

//getRandomNumber()



   //document.querySelector('.disco-box').style.backgroundColor = rgb
 /*let allBoxes = document.querySelectorAll('.disco-box')
 allBoxes.forEach((box) => {
 box.style.backgroundColor = rgb
 })
*/










/*let btn = document.querySelector('.click')
btn.addEventListener("mouseover", getRandomColor)

function getRandomColor(){
  const color = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`
  console.log(color)

 let allBoxes = document.querySelectorAll('.disco-box')
 //console.log(allBoxes)
 allBoxes.forEach((box) => {
    box.style.backgroundColor = color
    console.log(box)
})

}
*/
//getRandomColor()
/*
function getRandomNumber(){
    const number = Math.random().slice(2,5).padEnd(3,0)
    console.log(number)
}
getRandomNumber()
*/

