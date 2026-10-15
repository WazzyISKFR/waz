let clicked = 0

function handleClick(element) {
    clicked += 1
    console.log(clicked)
    element.classList.toggle("clicked");
    if (clicked === 1) {
        document.getElementById("pg1").textContent = "Oh you found something..."
    }

    if (clicked === 5) {
        document.getElementById("pg1").textContent = "Well now im interested.. What else can you do?"
    }

    if (clicked === 10) {
        document.getElementById("pg1").textContent = "Alright lets test your skills. Training session 1 begins soon."
    }

    if (clicked === 19) {
        document.getElementById("pg1").textContent = "Here try to do something with this: (sorry i got lazy nothing rn lol)"
    }

    if (clicked === 25) {
        document.getElementById("pg1").textContent = "25 clicks! Nice determination you got there..."
    }

    if (clicked === 50) {
        document.getElementById("pg1").textContent = "50 clicks... Maybe we should add a counter?"
    }

    if (clicked === 51) {
        document.getElementById("pg1").textContent = "51"
    }

    if (clicked === 52) {
        document.getElementById("pg1").textContent = "52"
    }

    if (clicked === 53) {
        document.getElementById("pg1").textContent = "53"
    }

    if (clicked === 54) {
        document.getElementById("pg1").textContent = "54"
    }

    if (clicked === 55) {
        document.getElementById("pg1").textContent = "55"
    }

    if (clicked === 56) {
        document.getElementById("pg1").textContent = "56"
    }

    if (clicked === 57) {
        document.getElementById("pg1").textContent = "57"
    }

    if (clicked === 58) {
        document.getElementById("pg1").textContent = "58"
    }

    if (clicked === 59) {
        document.getElementById("pg1").textContent = "59"
    }

    if (clicked === 60) {
        document.getElementById("pg1").textContent = "60"
    }

    if (clicked === 61) {
        document.getElementById("pg1").textContent = "61"
    }

    if (clicked === 62) {
        document.getElementById("pg1").textContent = "62"
    }

    if (clicked === 63) {
        document.getElementById("pg1").textContent = "63"
    }

    if (clicked === 64) {
        document.getElementById("pg1").textContent = "64"
    }

    if (clicked === 65) {
        document.getElementById("pg1").textContent = "65"
    }

    if (clicked === 66) {
        document.getElementById("pg1").textContent = "66"
    }

    if (clicked === 67) {
        document.getElementById("pg1").textContent = "67"
    }

    if (clicked === 68) {
        document.getElementById("pg1").textContent = "68"
    }

    if (clicked === 69) {
        document.getElementById("pg1").textContent = "69"
    }

    if (clicked === 70) {
        document.getElementById("pg1").textContent = "70"
    }

    if (clicked === 71) {
        document.getElementById("pg1").textContent = "71"
    }

    if (clicked === 72) {
        document.getElementById("pg1").textContent = "72"
    }

    if (clicked === 73) {
        document.getElementById("pg1").textContent = "73"
    }

    if (clicked === 74) {
        document.getElementById("pg1").textContent = "74"
    }

    if (clicked === 75) {
        document.getElementById("pg1").textContent = "75"
    }

    if (clicked === 76) {
        document.getElementById("pg1").textContent = "So you truly do think there is something at the end?"
    }

    if (clicked === 78) {
        document.getElementById("pg1").textContent = "Ok. Well there really isn't.. But you can keep clicking if you want."
        
        localStorage.setItem("clicked", clicked);
    }

    if (clicked === 99) {
        document.getElementById("pg1").textContent = "Reload the page and stop."
    }

    if (clicked === 100) {
        document.getElementById("pg1").textContent = "0 clicks."
        let saveddata = localStorage.getItem("clicked");
        clicked = 0
        alert(`You have ${clicked} clicks. Next time ill add something trust! ()`);
    }
}