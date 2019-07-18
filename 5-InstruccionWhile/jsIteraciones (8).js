function mostrar()
{

	var positivo=0;
	var negativo=1;	
	var respuesta='s';	
	var numero;
	var flag=0; //contador de negativos (bandera).

	do
		{numero=parseInt(prompt("Ingrese un numero: "));

		while(isNaN(numero))
		{
			alert("Error, ingrese un numero");
			numero=parseInt(prompt("Ingrese un numero: "));
		}
		respuesta=prompt("Desea continuar?").toLowerCase();

			if(numero>=0)
			{
				//positivo=numero+numero;
				positivo+=numero;
			}

				else if(numero<0)
				{
					negativo=numero*numero;
					negativo*=numero;
					flag=1;
				}

}while(respuesta== 's');

if(flag==0)
{
	negativo=0;
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN