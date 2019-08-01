function mostrar()
/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
{

    var nota=0;
    var acumNota=0;
    var sexo;    
    var notaBaja;
    var sexoNotaBaja;
    var flag=0;
    var promedio;
    var varonesNota6=0;

    for(i=0; i<5; i++)
    {
        sexo=prompt("Ingrese sexo");

        while(sexo!=="f" & sexo!=="m" && sexo!=="F" && sexo!=="M")
        {
            alert("Error, reingrese el sexo");
            sexo=prompt("Ingrese sexo");
        }

        nota=parseInt(prompt("Ingrese nota"));

        while(nota<0 || nota>10 || isNaN(nota))
        {
            alert("Error, reingrese nota");
            nota=parseInt(prompt("Ingrese nota"));
        }
        
        acumNota=acumNota+nota;

        if(nota<notaBaja || flag==0)
        {
            nota=notaBaja;
            sexo=sexoNotaBaja;
            flag=1;
        }

        if(nota>=6 && sexo=="m" && sexo=="M")
        {
            //nota=varonesNota6;
            varonesNota6++;
        }
        
    }
    promedio=acumNota/i;
    
    alert("El promedio es de "+promedio);
    
    alert("La nota mas baja es de "+notaBaja+" y su sexo es "+sexoNotaBaja);

    alert("Varones que sacaron 6 o mas: "+varonesNota6);

}
