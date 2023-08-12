function add(dress)
{
    var dresses = localStorage.getItem("dresses")
    if (dresses.includes(dress)){
        alert("Item is already in cart")
        return;
    }
    localStorage.setItem("dresses", [dresses, dress])
    var dresses = localStorage.getItem("dresses")
    var i = parseInt(localStorage.getItem("cart_items"))
    i += 1
    localStorage.setItem("cart_items", i)
    
    var d = document.getElementById("des")
    var img = document.getElementById("img")
    var name = document.getElementById("name")
    var price = document.getElementById("price")


    localStorage.setItem(dress + "name", name.innerText)
    localStorage.setItem(dress + "price", price.innerText)
    localStorage.setItem(dress + "info", d.innerText)
    localStorage.setItem(dress + "path", img.getAttribute("src"))

    console.log(price.innerText)
    console.log(name.innerText)
    console.log(localStorage.getItem("cart_items"))
    console.log(localStorage.getItem("dresses"))
    
    var str = {
                    "dressname": name.innerText,
                    "dressPrice": price.innerText,
                    "dressInfo": d.innerText,
                    "dressPath": img.getAttribute("src"),
                }
    var json = JSON.stringify(str);

    fetch("../../PHP/addToCart.php",{
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": json
    }).then(function(res){
      return res.text();
    }).then(function(data){
      alert(data);
    })
    alert("Item has been added to your cart");
}