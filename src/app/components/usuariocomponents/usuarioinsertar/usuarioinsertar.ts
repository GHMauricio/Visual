import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../models/Usuario';
import { Serviceusuario } from '../../../service/serviceusuario';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-usuarioinsertar',
  imports: [MatInputModule, MatDatepickerModule,MatSelectModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './usuarioinsertar.html',
  providers:[provideNativeDateAdapter()],
  styleUrl: './usuarioinsertar.css',
})
export class Usuarioinsertar implements OnInit { 
  form: FormGroup = new FormGroup({});
  aut: Usuario = new Usuario();
  generos: { value: string; viewValue: string }[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Femenino', viewValue: 'Femenino' },
    { value: 'Otro', viewValue: 'Otro' },
  ];

  constructor(
    private uS: Serviceusuario,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contrasenia: ['', Validators.required],
      Rol: ['', Validators.required],
      registro: ['', Validators.required],
      NaciU: ['', Validators.required],
      NaciA: ['', Validators.required],
      genero: ['', Validators.required],
      intereses: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      ((this.aut.nombreUsuario = this.form.value.nombre),
        (this.aut.correoUsuario = this.form.value.correo));
      this.aut.contrasenaUsuario = this.form.value.contrasenia;
      this.aut.rolUsuario=this.form.value.Rol;
      this.aut.fechaRegistro = this.form.value.registro;
      this.aut.nacimientoUsuario = this.form.value.NaciU;
      this.aut.nacimientoAdolescente=this.form.value.NaciA;
      this.aut.generoAdolescente=this.form.value.genero;
      this.aut.interesesAdolescente=this.form.value.intereses;
      this.aut.cantidadAdolescente= this.form.value.cantidad;
      this.uS.insert(this.aut).subscribe({
        next: () => {
          this.router.navigate(['/usuarios/listar']);
        },
      });
    }
  }
}
