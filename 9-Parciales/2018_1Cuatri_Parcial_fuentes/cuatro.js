function mostrar()
{
var num1;
var num2;
var resta;
var suma;

num1=prompt("Ingrese un numero: ");
num1=parseInt(num1);

num2=prompt("Ingrese otro numero");
num2=parseInt(num2);

if(num1==num2)
{
    alert("Los numeros ingresados son "+num1+ " y "+num2);    
}

    else if(num1>num2)
    {
        resta=num1-num2;
        alert("La resta es de: "+resta);
    }

        else
        {
            suma=num1+num2;
            
            if(suma>=10)
            {
                alert("La suma es de "+suma+" y supero el 10");
            }
        }

           
}
