function calculadoraIMC(peso, altura)
{
  peso = prompt("Ingrese su peso en Kg") ;
  altura = prompt("Ingrese su altura en metros");
  var imc =Math.round(peso/(altura*altura));
  alert("Indice de Mase Corporal : " + imc);
}
calculadoraIMC();
