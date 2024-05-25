


// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );

const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

