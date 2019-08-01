function mostrar()
{
/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

var nota;
var sexo;
var promedio=0;
var notaBaja=0;
var sexoNotaBaja=0;
var varonesNotaMayor=0;
var flag=0;
var contadorVarones=0;
//var alumnos=5;


for(var i=0 ; i<5 ; i++)
{
    sexo=prompt("Ingrese sexo");
    
    
    while(sexo!="f" && sexo!="m" & sexo!="F" && sexo !="M")
    {
        alert("Error, reingrese un sexo valido");
        
        sexo=prompt("Ingrese sexo");
    }

    
    nota=parseInt(prompt("Ingrese nota"));


        while(nota<0 || nota>10 || isNaN(nota))
        {
            alert("Error, reingrese una nota valida");

            nota=parseInt(prompt("Ingrese nota"));
        }

            
        if(nota<notaBaja || flag==0)
        {
            nota=notaBaja;
            sexo=sexoNotaBaja;
            flag=1;

            alert("La nota mas baja es de "+notaBaja+" y el sexo es "+sexoNotaBaja);
        }

            else if(varonesNotaMayor>=6)
            {
                contadorVarones=varonesNotaMayor;
                contadorVarones++;

                alert("La cantidad de varones que se sacaron 6 o mas es de "+contadorVarones);
            }

}

    
        /*promedio=nota/5;
        alert("El promedio de la suma de la notas es de "+promedio);*/
    


}
