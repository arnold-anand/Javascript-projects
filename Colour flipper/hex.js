const hex = [0,1,2,3,4,5,6,7,8,9,"A","B", "C","D", "E", "F"]
let btn = document.getElementById("btn")
let mycolor = document.getElementById("mycolor")
btn.addEventListener("click", function(){
    let hexcolor = "#"
    for (let index = 0; index < 6; index++) {
        let randint = Math.floor(Math.random()*16)
        hexcolor+= hex[randint]
        
    }
    document.getElementById('main').style.backgroundColor = hexcolor
    mycolor.innerText = hexcolor
})