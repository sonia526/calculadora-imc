function calculadoraIMC(peso,altura){
  peso= prompt("ingrese su peso") ;
  altura= prompt("ingrese su altura");
 var imc =Math.round(peso/(altura*altura));
 alert("el resultado es : " + imc);

}
calculadoraIMC();
