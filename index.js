const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const loginForm = document.getElementById("login-form")

setTimeout(function(){
    modalEl.style.display = 'block'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
    modalEl.style.display = 'none'
})

loginForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("submit button  works")
})


