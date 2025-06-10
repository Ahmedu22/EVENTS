//events 

//bad way
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function(){
    console.log("clicked");
}

//great way
const ahmed = document.querySelector(".best")
ahmed.addEventListener("click", () => {
    console.log("catched");
})

