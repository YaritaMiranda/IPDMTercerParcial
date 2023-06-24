import { Component } from '@angular/core';
import { VeterinariaService } from '../services/veterinaria.service';
import { ClienteResponse } from '../interfaces/clienteResponse';
import { MascotaResponse } from '../interfaces/mascotaResponse';
import { VacunaResponse } from '../interfaces/vacunaResponse';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clientes: ClienteResponse[] = [];
  mascotas: MascotaResponse[] = [];
  vacunas: VacunaResponse[] = [];
  cliente: string = '';
  mascota: string = '';
  constructor(private veterinariaService:VeterinariaService) {}

  ngOnInit() {
    this.cargarSelectClientes()
  }

  cargarSelectClientes() {
    this.veterinariaService.getClientes()
      .subscribe((resp) => {
        console.log(resp);
        this.clientes = resp as ClienteResponse[];
      });
  }

  cargarSelectMascotas() {
    this.veterinariaService.getMascotas(this.cliente)
      .subscribe((resp) => {
        console.log(resp);
        this.mascotas = resp as MascotaResponse[];
      });
  }
  verHistorial() {
    this.veterinariaService.getVacunas(this.mascota)
      .subscribe((resp) => {
        console.log(resp);
        this.vacunas = resp as VacunaResponse[];
      });
  }
}
