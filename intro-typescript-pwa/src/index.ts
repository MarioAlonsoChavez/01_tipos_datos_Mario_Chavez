interface utlAlumno{
    nombre:string;
    edad:number;
    calle:string;
    pais:string;
    estado:string;
    numero:number;
    mostrarDireccion:()=>void;
}

function alumnosUTL(nalumno:utlAlumno){
    nalumno.nombre='Mario',
    nalumno.edad=24,
    nalumno.calle='Navia',
    nalumno.pais='Mexico',
    nalumno.estado='Guanajuato',
    nalumno.numero=110;

    const pruebaAlumno:utlAlumno{
        mostrarDireccion()
            console.log(alumno);
            return this.nombre+', '+this.estado+ ', '+this.pais;
        
    }