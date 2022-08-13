
// Reto 1 

let lamparaPrendida = 1;

if (lamparaPrendida === 1)
{
console.log("La luz está prendida, para apagar di: Apagar luz");
}
else if (lamparaPrendida === 0)
{
console.log("la luz está apagada, para encender dí: Encender luz");
}
else{
    console.log("Inserta una opción válida: 0 o 1")
}

// Reto 2

let abriendoPuertas = 1;

if (abriendoPuertas === 1){
    console.log("Atención, puertas abriendo");
}
else {
    console.log("Cuidado, puertas cerrando");
}

// Reto 3
let texto = document.getElementById("inserta_edad");
let boton = document.getElementById("boton_enviar");
boton.addEventListener("click", edadPorClick);

function edadPorClick ()
{
   edad = parseInt(texto.value);
 
if (edad <= 12)
{
    console.log("No puedes ingresar");
    alert("Lo siento, no puedes ingresar");
}
else if (edad >12 && edad < 18)
{
    console.log("Puedes ingresar con un adulto responsable");
    alert("De acuerdo a tu edad puedes ingresar con un adulto responsable");

}
else if (edad >= 18)
{
    console.log("Puedes ingresar");
    alert("Puedes ingresar, disfruta la película");
} 
else 
{
    console.log("Ingresa edad");
    alert("Ingresa tu edad para validar");
}
}

// Reto 4

//Opción 1

let juego= "TINGO";

function jugarTingo(juego){
    console.log("TINGO");
}

for (let i=0; i<32; i++)
{
    jugarTingo(juego);
}
//Opción 2
let i;

for (let i=1; i<=32; i++)
{
    console.log(i+" Tingo!")
}

// Reto 5

let i1;
let gastos = 100;
let interes= gastos*1.10;

for (let i1=1; i1<=12; i1++)
{
    console.log("Gastos mes " + i1 + " = " + interes)
}

// Reto 6

let i2;
let n;


for (let i2=0; i2<=30; i2=(i2+1)*5)
{
    console.log(i+" PINPONG");
}
