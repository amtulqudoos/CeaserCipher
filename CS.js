



function encode(){
    
    
    let c = document.getElementById("userMessage").value;
    let output = c.charCodeAt(0);
  // Go through each character
  for (var i = 0; i < c.length; i++) {
     let code = c.charCodeAt(i);
     output = output+ ',' + code;
      document.getElementById("demo").innerHTML= output;
       console.log(code);
  }
}


function decode(){

  let input = document.getElementById("userM").value;
  let decoodedStr = input.split(',');
  let output = String.fromCharCode.apply(null, decoodedStr);
  document.getElementById("decode").innerHTML= output;
   console.log(output);
}