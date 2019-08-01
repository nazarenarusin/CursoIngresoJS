function mostrar()
{
    /*Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/


    var num1;
    var num2;
    var suma;
    var resta;

    num1=prompt("Ingrese un numero: ");
    num1=parseInt(num1);

    num2=prompt("Ingrese otro numero: ");
    num2=parseInt(num2);

    if(num1==num2)
    {
        alert("El primer numero es "+num1+" y el segundo numero es "+num2);
    }   
        
            else if(num1>num2)
            {
                resta=num1-num2;
                alert("El resultado de la resta es de "+resta);
            }

                    else
                    {
                        suma=num1+num2;
                        //alert("El resultado de la suma es de"+suma);

                        if(suma>=10)
                        {
                            alert("La suma es de "+suma+" y supero el 10.");
                        }
                    }



}
