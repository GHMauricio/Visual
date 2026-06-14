import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Test } from '../../../models/Test';
import { Testservice } from '../../../services/testservice';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-test-insertar',
  imports: [MatInputModule, MatDatepickerModule, MatButtonModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './test-insertar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './test-insertar.css',
})
export class TestInsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  t: Test = new Test();

  constructor(
    private tS: Testservice,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idUsuario: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
      notas: [''],
      puntaje: ['', [Validators.required, Validators.min(0), Validators.max(20)]],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.t.idUsuario = this.form.value.idUsuario;
      this.t.fechaTest = this.form.value.fecha;
      this.t.estadoEmocional = this.form.value.estado;
      this.t.notasTest = this.form.value.notas;
      this.t.puntajeTest = this.form.value.puntaje;

      this.tS.insert(this.t).subscribe({
        next: () => {
          this.router.navigate(['/tests/listar']);
        },
      });
    }
  }
}