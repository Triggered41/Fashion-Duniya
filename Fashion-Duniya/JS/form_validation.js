var form = document.forms['form'];
form.onsubmit = function(e){
  e.preventDefault();

    var url=location.href;
    var urlFilename = url.substring(url.lastIndexOf('/')+1);

  if (form.pin != null && form.cpass != null && form.number != null){

      if (!(/^\d+$/.test(form.pin.value))){
          alert("Check you pincode");
          return;
        }
        if (!(/^\d+$/.test(form.number.value))){
            alert("Check you Number");
            return;
        }
        
        if (form.pass.value != form.cpass.value){
            alert("passwords don't match")
        }else{
            alert("you have been registered")
            form.submit();
            return true
            // if (urlFilename.includes("Customer")){
            //     window.open("../HTML/Customer_Login.html", "_self")
            // }else{
            //     window.open("../HTML/Designer_Login.html", "_self")
            // }
        }
    }else{
        console.log("HELLO")
        form.submit();
        return true;
        // if (urlFilename.includes("Customer")){
        //     window.open("../index.html")
        // }else{
        //     window.open("../HTML/upload.html")
        // }
    }
}