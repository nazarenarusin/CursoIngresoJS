function mostrar()
{
    var numero;
    var letra;
    
    var positivos=0;
    var negativos=0;
    var acumPositivos=0;
    var acumNegativos=0;
    var cero=0;
    
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var acumPares=0;
    var acumImpares=0;
    
    var promedioPositivos;
        
    var letraMax=0;
    var letraMin=0;
    var numMax=0;
    var numMin=0;
    var seguir="s";
    
    do{
        
        letra=prompt("Ingrese una letra: ");
        
            while(letra<=0 || letra >=0)
        {
            alert("Error, no es una letra.");
            letra=prompt("Ingrese una letra");
        }
        
        numero=parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        
            while(numero<-100 || numero>100 || isNaN(numero))
        {
            alert("Error, reingrese un numero valido");
            numero=parseInt(prompt("Ingrese un numero entre -100 y 100: "))
        }
        
        if(numero<0)
        {
            acumNegativos+=numero;
            negativos++;
        }
        
                else if(numero>0)
                {
                    acumPositivos+=numero;
                    positivos++;
                }
        
                        else
                        {
                            cero++;
                        }     
        
        
        if(numero %2 ==0 )
        {
            acumPares+=numero;
            contadorPares++;
        }
        
                else if(numero %2 == 1)
                {
                    acumImpares+=numero;
                    contadorImpares++;
                }
        


                        else
                        {
                            contadorCeros++;
                        }
        
        
        if(numMax<numero)
        {
            numMax=numero;
            letraMax=letra;
        }
        
                else
                {
                    numMin=numero;
                    letraMin=letra;
                }
        
        seguir=prompt("Quiere seguir?");
        
    }while(seguir=="s")
    
    if(acumPositivos!==0)
    {
        promedioPositivos=acumPositivos/positivos;
    }
    
    document.write("La cantidad de numero pares es de: "+contadorPares+"<br>");
    document.write("La cantidad de numeros impares es de: "+contadorImpares+"<br>");
    document.write("La cantidad de ceros es de: "+contadorCeros+"<br>");
    document.write("El promedio de todos los numeros positivos es de: "+promedioPositivos+"<br>");
    document.write("La suma de todos los numeros negativos es de: "+acumNegativos+"<br>");
    document.write("El numero del maximo es: "+numMax+" y su letra es "+letraMax+"<br>");
    document.write("El numero del minimos es: "+numMin+" y su letra es "+letraMin+"<br>");
    
}

