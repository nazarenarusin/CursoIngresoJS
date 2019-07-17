function mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;

	while(contador<5)
	{
		acumulador=prompt("Por favor ingrese un numero");
		acumulador=parseInt(acumulador);
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN