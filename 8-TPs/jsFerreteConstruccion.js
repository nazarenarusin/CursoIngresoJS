/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);

    perimetro=(largo+ancho)*2; 
    
    alambre=perimetro*3;

    alert("La cantidad de alambre que se necesita es de "+alambre);

}
function Circulo () 
{
	var largo;
    var ancho;
    var radio;
    var alambre;

    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    radio=parseInt(document.getElementById("Radio").value);

    alambre=2 * 3.14 * radio;

    alert("Usted necesitara "+alambre.toFixed(2)+" metro de alambre");
}
function Materiales () 
{
    var largo;
    var ancho;
    var cal;
    var cemento;
    var superficie;

    largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);

    superficie=largo*ancho;

    cal= superficie*3;

    cemento=superficie*2;

    Alert("Se necesitan " + superficie + "m2" + " bolsas de cemento " + cemento + " bolsas de cal " + cal);
}