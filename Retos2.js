// RETO 1
// Parte 1 ARREGLOS
//1.  Declara un array que vamos a llamar “estudiantes” con los siguientes valores: Ana, Manuela, Raúl, Carolina, María, Antonio, Cristina
let estudiantes = ["Ana", "Manuela", "Rául", "Carolina", "Maria", "Antonio", "Cristina"];
for (let listado = 0; listado < estudiantes.length; listado++) {
    console.log(estudiantes[listado]);
    
}
// 2. Con un ciclo recorre el array e imprime en consola los estudiantes cuyo nombre empiece por ‘A’.
let estudiantes = ["Andrés","Ana", "Manuela", "Rául", "Carolina", "Maria", "Antonio", "Cristina"];
for (let listado = 0; listado < estudiantes.length; listado++) {
    if(estudiantes[listado][0]=== "A"){
        console.log(estudiantes[listado]);
    }
}
// // Parte 3 
// Con otro ciclo recorre el array e imprime en consola los estudiantes cuyo nombre tenga más de 6 letras.
let estudiantes = ["Andrés","Ana", "Manuela", "Rául", "Carolina", "Maria", "Antonio", "Cristina"];
for (let listado = 0; listado < estudiantes.length; listado++) {
    if(estudiantes[listado].length >= 6){
        console.log(estudiantes[listado]);
    }
}

//RETO 2 OBJETOS
//1. Declara un objeto que represente una mascota que tenga los siguientes atributos: nombre, tipo de animal, edad, nombre del dueño y juguetes.
// 2. El atributo juguetes debe contener un arreglo de valores que hagan referencia a todos los juguetes de la mascota.
let juguetes = ["Pelota", "Frisbee", "Cuerda", "peluche"];
let inforMascota = ["Pongo","Perro", 3, "Santiago", [juguetes]];
console.log(inforMascota);

//3. Crea 2 mascotas más.

let juguetesPerros=["Pelota", "Frisbee", "Cuerda"];
let juguetesGatos= ["Pelota", "Gimnasio","Rascador"];

let informacionMascota1= {
    nombreMascota: "Pongo",
    tipo :"Perro",
    edad: 3,
    nombreDueño: "Santiago",
    juguetesDisponibles: [juguetesGatos, juguetesPerros]
}
let informacionMascota2= {
    nombreMascota: "Ursula",
    tipo :"Gato",
    edad: 2,
    nombreDueño: "Gisselle",
    juguetesDisponibles: [juguetesGatos, juguetesPerros]
}
let informacionMascota3= {
    nombreMascota: "Ferrero",
    tipo :"Gato",
    edad: 1,
    nombreDueño: "Andrés",
    juguetesDisponibles: [juguetesGatos, juguetesPerros]
}

let tuMascota= [informacionMascota1, informacionMascota2,informacionMascota3];


for (let lista = 0; lista < tuMascota.length; lista++) {
    console.log("El es: " + tuMascota[lista].nombreDueño +" y su mascota se llama: " + tuMascota[lista].nombreMascota); 
}


//4. Imprime en consola los nombres de las 3 mascotas con el nombre de su dueño.

console.log(informacionMascota.nombreMascota + " y " +informacionMascota.nombreDueño);





//RETO 3 METODOS DEL ARRAY

// 1. Declara un array que tenga los números del 1 al 30, utilizando un método del array.

let x =[]

for (let index = 1; index <= 30; index++) {
    x.push(index)
    
}
console.log(x);

// 2. Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 3. 

let multiplo3 = x.filter(x=>x%3==0);
console.log("Los multiplos de tres son: " + multiplo3);

// 3. Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 5. 

//4. Debes aplicar un método para crear un nuevo arreglo que contenga el valor de cada número multiplicado por 2.

//5. Declara un array que tenga valores de diferentes tipos de datos, y utiliza un método que nos diga si todos los tipos de datos son iguales o no.