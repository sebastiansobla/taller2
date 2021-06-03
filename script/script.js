//Función prevent Default para cancelar los eventos por defecto
function functionSubmit(e){
    e.preventDefault();
 }
 
 //Declaración de variables
 let inputName,inputLastName, inputPhone, inputemail, inputhorastrabajadas, inputvalorordinaria, inputhorasextras, inputvalorextras, inputnumerodecuenta, sueldo
 //Inicialización de variables
 sueldo = 0;
 
 document.getElementById('inputConsignar').style.display = "none";

 
 function getConsignar(){
     inputName = document.getElementById('inputName').value;
     inputLastName = document.getElementById('inputLastName').value;
     inputemail = document.getElementById('inputemail').value;
     inputPhone  = document.querySelector('#inputPhone').value;
     inputhorastrabajadas = Number(document.getElementById('inputhorastrabajadas').value);
     inputvalorordinaria = Number(document.getElementById('inputvalorordinaria').value);
     inputhorasextras= Number(document.getElementById('inputhorasextras').value);
     inputvalorextras= Number(document.getElementById('inputvalorextras').value);
     inputnumerodecuenta= Number(document.getElementById('inputnumerodecuenta').value);
     
     functionsueldo();   
 }
 
 function functionsueldo(){
    sueldo= ( inputhorastrabajadas * inputvalorordinaria + inputhorasextras * inputvalorextras);
    document.getElementById('inputConsignar').value = sueldo.toFixed(1);
     document.getElementById('inputConsignar').style.display = "block";
     
     
 }
 