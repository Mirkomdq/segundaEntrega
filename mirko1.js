class Perfume {

    constructor(nombre,marca,genero,id) {
        this.marca = marca;
        this.nombre = nombre;
        this.genero = genero;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }


}

const perfumes = [
    new Perfume(" Sauvage", " Dior", "Masculino",1),
    new Perfume(" Gentleman", " Givenchy","Masculino",2),
    new Perfume(" 212 VIP", " Carolina Herrera", "Feminino",3),
    new Perfume(" In One", " Calvin Klein", "Femenino", 4),
    new Perfume(" Insense", " Givenchy", "Masculino", 5 ),
    new Perfume(" One Million", " Paco Rabanne", "Masculino", 6),
    new Perfume(" Anais", " Cacharel","Femenino", 7),
    new Perfume(" Olympea", " Paco Rabanne", "Femenino",8),
    new Perfume(" Callao", " Cardon", "Masculino", 9)

]

console.log(perfumes);



let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos del perfume: nombre,marca y genero separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');
    const perfume = new Perfume (datos[0], datos[1], datos[2], datos[3]);

    perfumes.push(perfume);

    perfume.asignarId(perfumes);

    console.log(perfumes)
}

let criterio = prompt('Elegí el criterio deseado:\n1 - Nombre (A a Z) \n2 - Nombre (Z a A)')

function ordenar(criterio,array){
    let formaOrdenada = array.slice(0);
    
    switch (criterio) {
        case '1':
            let nombreAscendente = formaOrdenada.sort((a,b)=>a.nombre.localeCompare(b.nombre))
            return nombreAscendente
        case'2':
        let nombreDescendente = formaOrdenada.sort((a,b)=>b.nombre.localeCompare(a.nombre))
        return nombreDescendente
        default:
        alert('Elegi un criterio valido')
        break;
    }

}

function resultadoString(array) {
    let info = ''

    array.forEach(elemento=>{
        info += 'Nombre: ' + elemento.nombre + '\nMarca: ' + elemento.marca
    
    })
return info
}

alert(resultadoString(ordenar(criterio,perfumes)))

