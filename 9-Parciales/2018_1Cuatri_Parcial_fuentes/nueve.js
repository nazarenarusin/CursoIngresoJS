function mostrar()
/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser 
entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al termina
r el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/
{
var marca;
var peso;
var temperatura;
var seguir="s";

var contadorTemperaturaPar;
var productoMasPesado;
var contadorPorductos0;
var promedioPeso;
var pesoMax;
var pesoMin;

do
{
    marca=prompt("Ingrese una marca: ");

    while(marca<=0 || marca>=0)
    {
        alert("Error, reingrese una marca valida.");
        marca=prompt("Ingrese una marca: ");
    }

    peso=parseInt(prompt("Ingrese el peso del producto del 1 al 100: "));

    while(peso<1 && peso>100)
    {
        alert("Error, reingrese el peso del producto .");
        peso=prompt("Ingrese el peso del producto del 1 al 100: ");
    }

    temperatura=parseInt(prompt("Ingrese la temperatura del producto, debe ser entre -30 y 30 grados: "));

    while(temperatura<-30 || temperatura>30)
    {
        alert("Error, reingrese la temperatura.");
        temperatura=parseInt(prompt("Ingrese la temperatura del producto, debe ser entre -30 y 30 grados: "));
    }




    seguir=prompt("Desea seguir ingresando datos?: ");
}while(seguir=="s");

}
