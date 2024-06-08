interface persona{
  nombre: string;
  edad: number;
  sexo:string;
  direccion?:string;
  correoElectronico:string;
}

const fer :persona={
  nombre:"Luis feranando",
  edad:27,
  sexo:"hombre",
  correoElectronico:"fer@gmail.com"
}

console.log(fer);
