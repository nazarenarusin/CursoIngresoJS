function mostrar()
{
var precio;
var descuento;
var resultado;

precio=prompt("Ingrese el precio");
precio=parseInt(precio);

descuento=prompt("Ingrese el descuento");
descuento=parseInt(descuento);

resultado=precio-(precio*descuento/100);

document.getElementById("elPrecioFinal").value=resultado;

}
