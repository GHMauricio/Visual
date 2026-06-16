import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DetalleTest } from '../../../models/DetalleTest';
import { Detalletestservice } from '../../../services/detalletestservice';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detalletest-insertar',
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './detalletest-insertar.html',
  styleUrl: './detalletest-insertar.css',
})
export class DetalleTestInsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  d: DetalleTest = new DetalleTest();

  constructor(
    private dtS: Detalletestservice,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idTest: ['', Validators.required],
      pregunta: ['', Validators.required],
      respuesta: ['', Validators.required],
      observacion: [''],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.d.idTest = this.form.value.idTest;
      this.d.pregunta = this.form.value.pregunta;
      this.d.respuesta = this.form.value.respuesta;
      this.d.observacion = this.form.value.observacion;

      this.dtS.insert(this.d).subscribe({
        next: () => {
          this.router.navigate(['/detallestest/listar']);
        },
      });
    }
  }
}