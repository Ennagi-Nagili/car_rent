let sliderEl = document.getElementById("slider")

sliderEl.addEventListener("input", (event) => {
    const progress = event.target.value; 
    
    sliderEl.style.background = `linear-gradient(to right, #3563E9 ${progress}%, #ccc ${progress}%)`;
})

let filter = document.getElementsByClassName("filter")
let side = document.getElementById("side")
let type = document.getElementById("type")
let capacity = document.getElementById("capacity")
let topa = document.getElementById("top")
let items = document.getElementsByClassName("items")
let divider = document.getElementsByClassName("v-divider")
let open = false
let click = false

for(let i = 0; i < filter.length; i++) {
    filter[i].onclick = function() {
        if(!open) {
            side.style.display = "block";
            type.style.display = "none";
            capacity.style.display = "none"
            items[0].style.gridTemplateColumns = "auto auto auto"
            items[1].style.gridTemplateColumns = "auto auto auto"
            topa.style.display = "none"
            open = true

            if(screen.width <= 1000) {
                document.getElementsByClassName("time-bot")[0].style.flexDirection = "column"
                document.getElementsByClassName("time-bot")[1].style.flexDirection = "column"

                for(let i = 0; i < divider.length; i++) {
                    divider[i].style.height = 0
                    divider[i].style.width = 48
                    divider[i].style.borderLeft = "none"
                    divider[i].style.borderTop = "1px solid rgba(195, 212, 233, 0.40)"
                }
            }
        }
    
        else {
            side.style.display = "none";
            type.style.display = "block";
            capacity.style.display = "block"
            items[0].style.gridTemplateColumns = "auto auto auto auto"
            items[1].style.gridTemplateColumns = "auto auto auto auto"
            topa.style.display = "flex"
            open = false

            if(screen.width <= 1000) {
                document.getElementsByClassName("time-bot")[0].style.flexDirection = "row"
                document.getElementsByClassName("time-bot")[1].style.flexDirection = "row"

                for(let i = 0; i < divider.length; i++) {
                    divider[i].style.height = 48
                    divider[i].style.width = 0
                    divider[i].style.borderLeft = "1px solid rgba(195, 212, 233, 0.40)"
                    divider[i].style.borderTop = "none"
                }
            }
        }
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