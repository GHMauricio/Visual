import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Recomendaciones } from '../../../models/Recomendaciones';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recomendacionesservices } from '../../../services/recomendacionesservices';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recomendaciones-editar',
  imports: [MatInputModule, MatDatepickerModule, MatSelectModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recomendaciones-editar.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './recomendaciones-editar.css',
})
export class RecomendacionesEditar implements OnInit {
  form: FormGroup = new FormGroup({});
  aut: Recomendaciones = new Recomendaciones();
  estadosDisponibles: string[] = ['Pendiente', 'Aprobada', 'Rechazada'];
  idRecomendacion: number = 0;

  constructor(
    private fb: FormBuilder,
    private recomendacionesService: Recomendacionesservices,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      idUsuario: [0, [Validators.required, Validators.min(1)]],
      FechaEnvio: [new Date(), Validators.required],
      EstadoRecomendacion: ['', Validators.required],
    });

    // Obtener el id desde la URL
    this.route.params.subscribe(params => {
      this.idRecomendacion = +params['id'];
      this.cargarDatos();
    });
  }

  cargarDatos(): void {
    this.recomendacionesService.list().subscribe({
      next: (data) => {
        const registro = data.find(r => r.idRecomendacion === this.idRecomendacion);
        if (registro) {
          this.aut = registro;
          this.form.patchValue({
            idUsuario: registro.idUsuario,
            FechaEnvio: new Date(registro.FechaEnvio),
            EstadoRecomendacion: registro.EstadoRecomendacion,
          });
        } else {
          alert('Recomendación no encontrada');
          this.router.navigate(['/recomendaciones']);
        }
      },
      error: (err) => {
        console.error('Error al cargar datos:', err);
        alert('Error al cargar la recomendación');
      }
    });
  }

  guardar(): void {
    if (this.form.valid) {
      this.aut.idRecomendacion = this.idRecomendacion;
      this.aut.idUsuario = this.form.value.idUsuario;
      this.aut.FechaEnvio = this.form.value.FechaEnvio;
      this.aut.EstadoRecomendacion = this.form.value.EstadoRecomendacion;

      this.recomendacionesService.update(this.aut).subscribe({
        next: () => {
          alert('Recomendación actualizada correctamente');
          this.router.navigate(['/recomendaciones']);
        },
        error: (err) => {
          console.error('Error al actualizar:', err);
          alert('Ocurrió un error al actualizar');
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  cancelar(): void {
    this.router.navigate(['/recomendaciones']);
  }
}
