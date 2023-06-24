import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {

  constructor(private http:HttpClient) { }

  getClientes() {
    return this.http.get("https://www.hostcatedral.com/api/appCatalogoLibro/public/getClientes");
  }

  getMascotas(cliente: string) {
    return this.http.get(`https://www.hostcatedral.com/api/appCatalogoLibro/public/getMascotasPorCliente/${cliente}`);
  }

  getVacunas(mascota: string) {
    return this.http.get(`https://www.hostcatedral.com/api/appCatalogoLibro/public/getVacunasPorMascota/${mascota}`);
  }
}