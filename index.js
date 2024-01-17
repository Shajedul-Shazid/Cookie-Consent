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
    setTimeout(function(){
        document.getElementById("uploadText").innerText = "Making the sale....."
    },1500)

    setTimeout(function(){
        const modalInnerText = document.getElementById("modal-inner")
        modalInnerText.innerHTML = 
        `
            <h2>Thanks you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>        
        `
    },3000)
})


