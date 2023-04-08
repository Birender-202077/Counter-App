// document.getElementById("count").textContent=5
let count = 0

let countMsg = document.getElementById("count")
let saveEl = document.getElementById("save-el")

function increaseCount(){
    // console.log("Increased by 1")
    count = count + 1 
    // countMsg.innerText = count
    // console.log(count)
    countMsg.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countMsg.innerText = 0
    count =0
}

