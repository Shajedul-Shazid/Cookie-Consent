const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")

setTimeout(function(){
    modalEl.style.display = 'block'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
    modalEl.style.display = 'none'
})

