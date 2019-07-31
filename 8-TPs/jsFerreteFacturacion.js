/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1;
    var p2;
    var p3;
    var suma;

    p1=parseFloat(document.getElementById("PrecioUno").value);
    p2=parseFloat(document.getElementById("PrecioDos").value);
    p3=parseFloat(document.getElementById("PrecioTres").value);
    suma=p1+p2+p3;

    alert("La suma es de "+suma);
}
function Promedio () 
{
	var p1;
    var p2;
    var p3;
    var suma;
    var promedio;

    p1=parseFloat(document.getElementById("PrecioUno").value);
    p2=parseFloat(document.getElementById("PrecioDos").value);
    p3=parseFloat(document.getElementById("PrecioTres").value);
    suma=p1+p2+p3;

    promedio=suma/3;

    alert("El promedio es de "+promedio);
}
function PrecioFinal () 
{
	var p1;
    var p2;
    var p3;
    var suma;
    var iva;
    var precioFinal;

    p1=parseFloat(document.getElementById("PrecioUno").value);
    p2=parseFloat(document.getElementById("PrecioDos").value);
    p3=parseFloat(document.getElementById("PrecioTres").value);
    suma=p1+p2+p3;

    iva=suma*.21;

    precioFinal=suma+iva;

    alert("El precio final es de "+precioFinal);
}