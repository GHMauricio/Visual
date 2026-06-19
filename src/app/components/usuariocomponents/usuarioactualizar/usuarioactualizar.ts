import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Serviceusuario } from '../../../services/serviceusuario';
import { UsuarioInsertar } from '../../../models/UsuarioInsertar';

@Component({
  selector: 'app-usuarioactualizar',
  imports: [MatInputModule,MatDatepickerModule,MatSelectModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './usuarioactualizar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './usuarioactualizar.css',
})
export class Usuarioactualizar implements OnInit {
  form: FormGroup = new FormGroup({});
  user: UsuarioInsertar = new UsuarioInsertar();
  id:number=0
  generos: { value: string; viewValue: string }[] = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Femenino', viewValue: 'Femenino' },
    { value: 'Otro', viewValue: 'Otro' },
  ];

  constructor(
    private uS: Serviceusuario,
    private router: Router,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute//
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = params["id"]//
      this.init()
    })

    this.form = this.formBuilder.group({
      codigo:[''],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      naciU: ['', Validators.required],
      naciA: ['', Validators.required],
      genero: ['', Validators.required],
      intereses: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      ((this.user.nombreUsuario = this.form.value.nombre),
        (this.user.correoUsuario = this.form.value.correo));      
      this.user.nacimientoUsuario = this.form.value.NaciU;
      this.user.nacimientoAdolescente=this.form.value.NaciA;
      this.user.generoAdolescente=this.form.value.genero;
      this.user.interesesAdolescente=this.form.value.intereses;
      this.user.cantidadAdolescente= this.form.value.cantidad;
      this.uS.update(this.user).subscribe({
        next: () => {
          this.router.navigate(['/usuarios/listar']);
        },
      });
    }
  }

  init(){
    this.uS.listId(this.id).subscribe(data=>{
      this.form.patchValue({
        codigo:data.idUsuario,
        nombre:data.nombreUsuario,
        correo:data.correoUsuario,
        naciU:data.nacimientoUsuario,
        naciA:data.nacimientoAdolescente,
        genero:data.generoAdolescente,
        intereses:data.interesesAdolescente,
        cantidad:data.cantidadAdolescente
      })
    })
  }
}
