function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	numero = parseInt(numero);

	while (numero < 0 || numero >9) {

 		alert("No ingresó un número entre 0 y 9, inténtelo nuevamente.");

  		var numero = prompt("Ingrese un número entre 0 y 9 y presione aceptar.");

  		numero = parseInt(numero);
	}

document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN