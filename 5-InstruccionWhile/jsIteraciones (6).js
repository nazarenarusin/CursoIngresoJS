function mostrar()
{
	var numero;
	var suma=0;
	var promedio;
	var contador=0; //contador=contador+1;
	//var acumulador=0; suma=suma+numero;

	while(contador<5)
	{
		numero=parseInt(prompt("Ingrese un numero"));
		suma+=numero; //suma=suma+numero;

		contador ++;
	}

	promedio=suma/5;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN