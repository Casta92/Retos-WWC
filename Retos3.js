//RETO 1

function calculadora (a, b, c){
    if (typeof a!== "number" || typeof c!=="number"){
        return "Datos erroneos, no se puede hacer la operación"
    }
    else if (b=="+") {
        let d = a+c;
        return d        
    }
    else if (b=="-"){
        let d = a-c;
        return d
    }
    else if (b=="*"){
        let d = a*c;
        return d
    }
    else if (b=="/"){
        if (c==0)
            {
            alert("No puedes dividir por 0!")
            return 0;
            }
        else {            
            let d = a/c;
            return d;
            }
    }
    else if (b=="^"){
        let d = a**c;
        return d
    }
    else {
        console.log("Inserte una operación válida")
    }
}

const resultado = calculadora(5,"/",5);
console.log("El resultado de la operación es: "+ resultado);




// function suma(a,b){
//     return a+b;
// }
// let resultado= suma(5,3);
// console.log(resultado)


// RETO 2

const frases = [
    "Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.",
    "Este es un mensaje super encriptado y solo los mejores podrán leerlo."
]
const encriptar = (frase)=> {
    //Convertir a MAYUSCULA
    let frasesMayusculas = frase.toUpperCase();
    // console.log(frasesMayusculas);
    
    // Convertir carácteres (texto a numeros)

    let letra4 = frasesMayusculas.replaceAll("Á", "4");
    let letra5 = letra4.replaceAll("S", "5");
    let letra3 = letra5.replaceAll("E", "3");
    let letra0 = letra3.replaceAll("O", "0");
    let letra6 = letra0.replaceAll("G", "6");
    let letra1 = letra6.replaceAll("I", "1");
    let letra7 = letra1.replaceAll("T", "7");
    let letra4A= letra7.replaceAll("Á", "4");

    let mensajeEncriptado = letra4A;
    console.log(mensajeEncriptado);

}
const frasesEncriptadas = frases.map(encriptar);


