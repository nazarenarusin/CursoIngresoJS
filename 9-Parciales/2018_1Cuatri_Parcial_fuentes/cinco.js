function mostrar()
{
var planeta;

planeta=prompt("Ingrese un planeta: ");

switch(planeta)
{
    case "tierra":
    alert("Aca vivimos");
    break;

    case "mercurio":
    case "venus":
    alert("acá hace más calor");
    break;

    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    case "pluton":
    alert("acá hace más frio")
    break;

    default:
    alert("No es un planeta valido");

}
}
