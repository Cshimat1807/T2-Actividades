function mostrarMensaje() {
let n1;
let n2;
n1 = document.getElementById("n1").value;
n2 = parseInt(document.getElementById ("n2").value, 0);
document.getElementById("mensaje").innerHTML = "El primer número es: " + n1 + "\nEl segundo número es: " + n2 + "\nLa suma es: " + (n1+n2) + "\nLa resta es: " + (n1-n2) + "\nElproducto es: " + (n1*n2) + "\nLa división es: " + (n1/n2) +"\nEl resto es: " + (n1%n2)
}
