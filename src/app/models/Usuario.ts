export class Usuario{
    idUsuario: number = 0;
    nombreUsuario: string = '';
    correoUsuario: string = '';
    rolUsuario: string = '';
    fechaRegistro:Date=new Date(); 
    nacimientoUsuario: Date=new Date();
    nacimientoAdolescente: Date=new Date();
    generoAdolescente: string = '';
    interesesAdolescente: string = '';
    cantidadAdolescente: number = 0;
    
    // 🔑 Campo exclusivo para el registro (opcional para que no estorbe en el listar)
    contrasenaUsuario?: string = ''; 
}
