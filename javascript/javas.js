const addressbtn = document.querySelector('#address')
addressbtn.addEventListener("click", function(){
    document.querySelector('.address').style.display = "flex"
}
)
const addressclose = document.querySelector('#address-close')
addressclose.addEventListener("click", function(){
    document.querySelector('.address').style.display = "none"
}
)