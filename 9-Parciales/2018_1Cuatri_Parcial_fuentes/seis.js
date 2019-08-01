function mostrar()
/*Bienvenidos (SWITCH +IF). 
Se ingresa una hora. 
Si está entre las 6 y las 11 mostrar:"es de mañana", 
si es desde las 12 a las 19: "es de tarde", 
de lo contrario informar que es de noche. 
Informar si la hora no es válida. 
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir". */
{
var hora;

hora=parseInt(document.getElementById("laHora").value);

switch(hora)
{
    case hora:
    if(hora>=6 && hora<=11)
    {
        alert("Es de mañana");
    }

        else if(hora>=12 && hora<=19)
        {
            alert("Es de tarde");
        }

            else if(hora>=20 && hora<=24 || hora>=0 && hora<=5)
            {
                alert("Es de noche");

                if(hora>19 && hora <24)
                {
                    alert("A dormir");
                }
            }                
                    else
                    {
                        alert("La hora no es valida");
                    }
break;    
}
}
