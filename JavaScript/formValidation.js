function validation()
 {   console.log(doc)
    let x = document.forms["myForm"]["fname"].value;
   
  if (x == "")
   { console.log(x);
    alert("Name must be filled out");  
   }

   else{
    console.log(x);
   }
    
 }

 function getValue()
{
    var val = document.getElementById('fname').value;
    console.log(val);
}