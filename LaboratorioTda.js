console.log("Hola Mundo!");
class Cancion {
    constructor(titulo, artista, duracion){
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }
    formato (){
        return this.titulo +"-"+ this.artista+" " + (formatoTiempo(this.duracion))
    }
}

class Album {
    constructor(titulo, anio, canciones=[]){
        this.titulo = titulo;
        this.anio = anio;
        this.canciones = canciones;
    }
    agregarCancion(cancion){
        this.canciones.push(cancion);
    }
};

class Accion{
    constructor(tipo, cancion, posicion){
        this.tipo = tipo;
        this.cancion = cancion;
        this.posicion = posicion;
    }
};

function formatoTiempo (segundos){
let min=Math.floor(segundos/60);
let sec=segundos%60;

if(sec < 10){
    sec="0"+sec
}
return min+":"+sec
};

let cancion1 = new Cancion ("I'm still standig", "Elton John", 360);
let cancion2 = new Cancion ("RocketMan", "Elton John", 452);
let cancion3 = new Cancion ("Wild Gilbert", "Loovinder", 265);
let cancion4 = new Cancion ("Go Pato", "Pato Banton", 249);

let album = new Album("Album XD", 2024, [cancion1, cancion2]);
let album2 = new Album("Album :v", 2020, [cancion3, cancion4]);

console.log(album);
console.log(album2);