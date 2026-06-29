import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { entrevistaservice } from '../../../services/entrevistaservice';
import { Entrevista } from '../../../models/entrevista';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-entrevistaactualizar',
  imports: [MatInputModule,MatDatepickerModule,MatSelectModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './entrevistaactualizar.html',
   providers: [provideNativeDateAdapter()],
  styleUrl: './entrevistaactualizar.css',
})
export class Entrevistaactualizar implements OnInit {
  form: FormGroup = new FormGroup({});
  aut: Entrevista = new Entrevista();
  id:number=0

temas: { value: string; viewValue: string }[] = [
    { value: 'DEPORTES', viewValue: 'DEPORTES' },
    { value: 'AMIGOS', viewValue: 'AMIGOS' },
    { value: 'REDES', viewValue: 'REDES' },
    { value: 'SEXO', viewValue: 'SEXO' },
    { value: 'ESCUELA', viewValue: 'ESCUELA' },
  ];


  constructor(
    private eS: entrevistaservice,
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
      recomendacion: ['', Validators.required],
      fecha: ['', Validators.required],
      tema: ['', Validators.required],
      comentarios: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      (this.aut.idEntrevista=this.form.value.codigo),
      ((this.aut.idRecomendacion = this.form.value.recomendacion),
        (this.aut.fechaEntrevista = this.form.value.fecha));
      this.aut.temaEntrevista = this.form.value.tema;
      this.aut.comentarioEntrevista=this.form.value.comentarios;
      this.eS.update(this.aut).subscribe({
        next: () => {
          this.router.navigate(['/entrevistas/listar']);
        },
      });
    }
  }

  init(){
    this.eS.listId(this.id).subscribe(data=>{
      this.form.patchValue({
        codigo:data.idEntrevista,
        recomendacion:data.idRecomendacion,
        fecha:data.fechaEntrevista,
        tema:data.temaEntrevista,
        comentarios:data.comentarioEntrevista,      
      })
    })
  }
}
