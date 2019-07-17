function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10");

	numero = parseInt(numero);

	while (numero < 0 || numero >10) {

 		alert("No ingresó un número entre 0 y 10, inténtelo nuevamente.");

  		 numero = prompt("Ingrese un número entre 0 y 10 y presione aceptar.");

  		numero = parseInt(numero);
	}

document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN