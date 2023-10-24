let sliderEl = document.getElementById("slider")

sliderEl.addEventListener("input", (event) => {
    const progress = event.target.value; 
    
    sliderEl.style.background = `linear-gradient(to right, #3563E9 ${progress}%, #ccc ${progress}%)`;
})

let filter = document.getElementById("filter")
let side = document.getElementById("side")
let type = document.getElementById("type")
let capacity = document.getElementById("capacity")
let topa = document.getElementById("top")
let items = document.getElementsByClassName("items")
let open = false
let click = false

filter.onclick = function() {
    if(!open) {
        side.style.display = "block";
        type.style.display = "none";
        capacity.style.display = "none"
        items[0].style.gridTemplateColumns = "auto auto auto"
        items[1].style.gridTemplateColumns = "auto auto auto"
        topa.style.display = "none"
        open = true
    }

    else {
        side.style.display = "none";
        type.style.display = "block";
        capacity.style.display = "block"
        items[0].style.gridTemplateColumns = "auto auto auto auto"
        items[1].style.gridTemplateColumns = "auto auto auto auto"
        topa.style.display = "flex"
        open = false
    }
}

let heart = document.getElementsByClassName("heart");
let likes = []

for(let i = 0; i < heart.length; i++) {
    likes[i] = false
}

for(let i = 0; i < heart.length; i++) {
    heart[i].onclick = function() {
        click = true
        if(!likes[i]) {
            heart[i].src = "like_fill.svg"
            likes[i] = true
        }
        else {
            heart[i].src = "like_empty.svg"
            likes[i] = false
        }
    }
}

let item = document.getElementsByClassName("item")

for(let i = 0; i < item.length; i++) {
    item[i].onclick = function() {
        if (!click) {
            window.location.href = "details.html"
        }
    
        else {
            click = false
        }
    }
}

let btn = document.getElementsByClassName("top-btn")

for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        click = true
        window.location.href = "pay.html"
    }
}