var img = document.querySelector("img")
var input = document.querySelector("input")
input.onchange = function(){
    var ul = URL.createObjectURL(input.files[0])
    img.setAttribute("src", ul)
}

function upload(){
    var form = document.forms["form"]
    var upl = localStorage.getItem("u_dresses")
    var ul = URL.createObjectURL(input.files[0])
    var images = localStorage.getItem("images")
    if (!upl.includes(form.name.value)){
        localStorage.setItem("u_dresses", [upl, form.name.value])
        localStorage.setItem("images", [images, ul])
        alert("Product has been uploaded")
        window.open("../index.html", "_self")
    }

}