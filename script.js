const btn = document.querySelector("button")
const empty = document.querySelector(".empty")

btn.addEventListener("click", () => {
    
    const code = ["I find that the harder I work, the more luck I seem to have. - Thomas Jefferson", "Your time is limited, don't waste it living someone else's life. - Steve Jobs", "You should be full of leaderShip qualities - SIR Muaz", "This is Very hard😢", "Just get out👏"]

    const randomCode = Math.random() * code.length
    const floor = Math.floor(randomCode)

    console

    empty.innerHTML = 
    code[floor]


})