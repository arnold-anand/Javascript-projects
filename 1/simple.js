const colors = ["green", "red", "rgba(133,122,200)", "f15025"]
let btn = document.getElementById("btn")
let mycolor = document.getElementById("mycolor")
btn.addEventListener("click", function(){
    let randint = Math.floor(Math.random()*4)
    document.getElementById('main').style.backgroundColor = colors[randint]
    mycolor.innerText = colors[randint]
})