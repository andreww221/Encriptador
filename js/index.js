
/* SELECCIONAMOS LOS ELEMENTOS */


const txtArea = document.querySelector('[data-textAreaSuperior]');

const txtArea2 = document.querySelector('[data-textAreaInferior]');

const botonEncriptar  = document.querySelector('[data-botonEnCriptar]');

const botonDesencriptar  = document.querySelector('[data-botonDesencriptar]');

const botonCopiar = document.querySelector('[data-botonCopiar]');

const campoResultado = document.querySelector("[data-resultado]");

const mensajeFooter1 = document.querySelector("[data-footerInfo1]");

const mensajeFooter2 = document.querySelector("[data-footerInfo2]");



botonEncriptar.addEventListener("click",()=>{

const valorTxtArea = txtArea.value;

var nuevaCadena = "";

for(var i=0 ; i<valorTxtArea.length;i++){

   if(valorTxtArea[i]=="e"){
    nuevaCadena = nuevaCadena + "enter";

   }else if(valorTxtArea[i]=="i"){
    nuevaCadena = nuevaCadena + "imes";

   }else if(valorTxtArea[i]=="a"){
    nuevaCadena = nuevaCadena + "ai";
       
   }else if(valorTxtArea[i]=="o"){
    nuevaCadena = nuevaCadena + "ober";
       
   }else if(valorTxtArea[i]=="u"){ 
    nuevaCadena = nuevaCadena + "ufat";
       
   }else{
    nuevaCadena = nuevaCadena + valorTxtArea[i];
   }

}


mensajeFooter1.classList.add("eliminar");

mensajeFooter2.classList.add("eliminar");

txtArea2.classList.add("agregar");


botonCopiar.classList.add("agregar");

txtArea2.value=nuevaCadena;


})




botonDesencriptar.addEventListener("click",()=>{

   const valorTxtArea = txtArea.value;

   const primeraCapa = valorTxtArea.replace(/enter/g,"e");
   const segundaCapa = primeraCapa.replace(/imes/g,"i");
   const terceraCapa = segundaCapa.replace(/ai/g,"a");
   const cuartaCapa = terceraCapa.replace(/ober/g,"o");
   const quintaCapa = cuartaCapa.replace(/ufat/g,"u");



   var nuevaCadena = quintaCapa;
   
   
   

   mensajeFooter1.classList.add("eliminar");
   
   mensajeFooter2.classList.add("eliminar");
   
   txtArea2.classList.add("agregar");

   botonCopiar.classList.add("agregar");
   
   txtArea2.value=nuevaCadena;
})



botonCopiar.addEventListener("click",()=>{

   
   navigator.clipboard.writeText(txtArea2.value)


})
