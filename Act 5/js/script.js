function mostrarMensaje() {
let n1;
let n2;
n1 = document.getElementById("n1").value;
n2 = parseInt(document.getElementById ("n2").value, 0);
document.getElementById("mensaje").innerHTML = "El primer número es: " + n1 + "<br>El segundo número es: " + n2 + "<br>La suma es: " + (n1+n2) + "<br>La resta es: " + (n1-n2) + "<br>Elproducto es: " + (n1*n2) + "<br>La división es: " + (n1/n2) +"<br>El resto es: " + (n1%n2)
}
