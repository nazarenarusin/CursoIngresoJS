function mostrar()
{
var precio;
var descuento;
var precioFinal;

precio=parseInt(prompt("Ingrese el precio"));
descuento=parseInt(prompt("Ingrese el descuento"));

precioFinal=(precio-descuento)/100;

document.getElementById("elPrecioFinal").value=precioFinal;
}
