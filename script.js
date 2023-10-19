let sliderEl = document.getElementById("slider")

sliderEl.addEventListener("input", (event) => {
    const progress = event.target.value; 
    
    sliderEl.style.background = `linear-gradient(to right, #3563E9 ${progress}%, #ccc ${progress}%)`;
})