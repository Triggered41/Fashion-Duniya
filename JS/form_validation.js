globalThis.myvar = "iojh"
var form = document.forms['form'];
form.onsubmit = function(e){
  e.preventDefault();

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
            form.submit()
        }
    }

}