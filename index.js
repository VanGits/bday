const button1 = document.querySelector(".container-1")
const button2 = document.querySelector(".container-2")
const button3 = document.querySelector(".container-3")


button1.addEventListener("click", (e) => {
    window.open('mailto:celdranvan@gmail.com?subject=subject&body=1 hour massage');
    alert("Request for 1 hour massage has been sent!")
})

button2.addEventListener("click", (e) => {
    window.open('mailto:celdranvan@gmail.com?subject=subject&body=kiss and hug');
    alert("Request for kiss and hug has been sent!")
})

button3.addEventListener("click", (e) => {
    window.open('mailto:celdranvan@gmail.com?subject=subject&body=clean the house');
    alert("Request for clean the house has been sent!")
})