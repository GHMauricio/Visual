import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DetalleTest } from '../../../models/DetalleTest';
import { Detalletestservice } from '../../../services/detalletestservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detalletest-editar',
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './detalletest-editar.html',
  styleUrl: './detalletest-editar.css',
})
export class DetalleTestEditar implements OnInit {
  form: FormGroup = new FormGroup({});
  d: DetalleTest = new DetalleTest();

  constructor(
    private dtS: Detalletestservice,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idTest: ['', Validators.required],
      pregunta: ['', Validators.required],
      respuesta: ['', Validators.required],
      observacion: [''],
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dtS.list().subscribe((data) => {
      const encontrado = data.find((x) => x.idDetalleTest === id);
      if (encontrado) {
        this.d = encontrado;
        this.form.patchValue({
          idTest: encontrado.idTest,
          pregunta: encontrado.pregunta,
          respuesta: encontrado.respuesta,
          observacion: encontrado.observacion,
        });
      }
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.d.idTest = this.form.value.idTest;
      this.d.pregunta = this.form.value.pregunta;
      this.d.respuesta = this.form.value.respuesta;
      this.d.observacion = this.form.value.observacion;

      this.dtS.update(this.d).subscribe({
        next: () => {
          this.router.navigate(['/detallestest/listar']);
        },
      });
    }
  }
}