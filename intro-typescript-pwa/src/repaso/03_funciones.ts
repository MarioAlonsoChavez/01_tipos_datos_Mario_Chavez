

function nombres():void{
    console.log('nombre');
}

function sumar(num1:number,num2:number):number{
    return num1+num2;
}

console.log(sumar(10,5));

function restar(num1:number,num2:number,num3?:number):number{
    if(num3){
        return num1 - num2 - num3;
    }
    else{
        return num1 - num2;
    }
    
    

    
}

const sumaFlecha=(a:number,b:number):number=>{
    return a+b;
}

interface escuelaAlumno{
    nombre:string;
    email?:string;
    edad:number;
    saludar:()=>void;
}

function alumnoUTL(alumno:escuelaAlumno, califica:number):void{
    alumno.nombre='Mario';
    alumno.email='mario@gmail.com';
    alumno.edad=califica;
}

const nuevoAlumno:escuelaAlumno={
    nombre:'Dario',
    edad:23,
    saludar(){
        console.log('Hola mundo')
    }
}



//console.log(restar(10, 5));
//console.log(restar(10,5,2));