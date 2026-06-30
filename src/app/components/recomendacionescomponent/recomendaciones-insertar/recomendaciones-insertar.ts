import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recomendaciones } from '../../../models/Recomendaciones';
import { Recomendacionesservices } from '../../../services/recomendacionesservices';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-recomendaciones-insertar',
  imports: [MatInputModule, MatDatepickerModule,MatSelectModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './recomendaciones-insertar.html',
  providers:[provideNativeDateAdapter()],
  styleUrl: './recomendaciones-insertar.css',
})
export class RecomendacionesInsertar implements OnInit {
  form: FormGroup = new FormGroup({});
  aut: Recomendaciones = new Recomendaciones();
  estadosDisponibles: string[] = ['Pendiente', 'Aprobada', 'Rechazada'];

  constructor(
    private fb: FormBuilder,
    private recomendacionesService: Recomendacionesservices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      idUsuario: [0, [Validators.required, Validators.min(1)]],
      FechaEnvio: [new Date(), Validators.required],
      EstadoRecomendacion: ['Pendiente', Validators.required],
    });
  }

  guardar(): void {
    if (this.form.valid) {
      this.aut.idUsuario = this.form.value.idUsuario;
      this.aut.FechaEnvio = this.form.value.FechaEnvio;
      this.aut.EstadoRecomendacion = this.form.value.EstadoRecomendacion;

      this.recomendacionesService.insert(this.aut).subscribe({
        next: () => {
          alert('Recomendación guardada correctamente');
          this.router.navigate(['/recomendaciones']);
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Ocurrió un error al guardar');
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
