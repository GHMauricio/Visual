import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Test } from '../../../models/Test';
import { Testservice } from '../../../services/testservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-test-editar',
  imports: [MatInputModule, MatDatepickerModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './test-editar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './test-editar.css',
})
export class TestEditar implements OnInit {
  form: FormGroup = new FormGroup({});
  t: Test = new Test();

  constructor(
    private tS: Testservice,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idUsuario: ['', Validators.required],
      fecha: ['', Validators.required],
      estado: ['', Validators.required],
      notas: [''],
      puntaje: ['', Validators.required],
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tS.list().subscribe((data) => {
      const encontrado = data.find((x) => x.idTest === id);
      if (encontrado) {
        this.t = encontrado;
        this.form.patchValue({
          idUsuario: encontrado.idUsuario,
          fecha: encontrado.fechaTest,
          estado: encontrado.estadoEmocional,
          notas: encontrado.notasTest,
          puntaje: encontrado.puntajeTest,
        });
      }
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.t.idUsuario = this.form.value.idUsuario;
      this.t.fechaTest = this.form.value.fecha;
      this.t.estadoEmocional = this.form.value.estado;
      this.t.notasTest = this.form.value.notas;
      this.t.puntajeTest = this.form.value.puntaje;

      this.tS.update(this.t).subscribe({
        next: () => {
          this.router.navigate(['/tests/listar']);
        },
      });
    }
  }
}