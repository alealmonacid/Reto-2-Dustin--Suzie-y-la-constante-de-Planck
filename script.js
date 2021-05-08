const btnValidar = document.getElementsByTagName("button")[0];
const claves = ['6.62607015', '6,62607004']

btnValidar.addEventListener("click", () => {
    const password = document.getElementsByTagName("input")[0].value;

    const validar = claves.includes(password) ? "Gracias señor, no morimos <3 <3 <3" : "Oh No";

    alert(validar)

})