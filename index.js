const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const loginForm = document.getElementById("login-form")
const modalText = document.getElementById("modal-text")

setTimeout(function(){
    modalEl.style.display = 'block'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
    modalEl.style.display = 'none'
})

loginForm.addEventListener("submit", function(e){
    e.preventDefault()
    modalText.innerHTML = 
    `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    `
})


