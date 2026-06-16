import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Eventoservice } from '../../../services/eventoservice';
import { Router } from '@angular/router';
import { Evento } from '../../../models/Evento';

@Component({
  selector: 'app-evento-insertar',
  imports: [
    MatInputModule, 
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './evento-insertar.html',
  styleUrl: './evento-insertar.css',
})
export class EventoInsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  evt: Evento = new Evento();
  niveles: { value: number; viewValue: string }[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
  ];

  constructor(
    private aS: Eventoservice,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      tipoEvento: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.evt.tituloEvento = this.form.value.titulo;
      this.evt.descripcionEvento = this.form.value.descripcion;
      this.evt.fechaInicio = this.form.value.fechaInicio;
      this.evt.fechaFin = this.form.value.fechaFin;
      this.evt.tipoEvento = this.form.value.tipoEvento;
      
      this.aS.insert(this.evt).subscribe({
        next: () => {
          this.router.navigate(['/eventos/listar']);
        },
      });
    }
  }
}
