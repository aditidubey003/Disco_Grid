let div = document.querySelector('.boxes')

for(let i = 1; i <= 500; i++){
let smallBox = document.createElement('div')
smallBox.classList.add('disco-box') 
let h3 = document.createElement('h3')
h3.innerText = getRandomNumber()
smallBox.append(h3)
div.append(smallBox)
}





div.addEventListener("mouseover", function(){
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



