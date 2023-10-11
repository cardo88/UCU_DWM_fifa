import { Component } from '@angular/core';
import { Player } from '../player';
import { PlayerServiceService } from '../services/player-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public jugadores: Player[] = [];

  constructor(private servicio: PlayerServiceService) {
    this.jugadores = this.servicio.obtenerJugadores();
  }

  nuevojugador: Player = {
    id: -1,
    nombre: "",
    apellido: "",
    posicion: "",
    imagen: ""
  }

  contador: number = 0;
  maxjugadores : number = 23;

  agregarJugador() {
    if (this.contador < this.maxjugadores) {
      this.contador++;
      this.jugadores.push(this.nuevojugador);
      this.nuevojugador = {
        id: -1,
        nombre: "",
        apellido: "",
        posicion: "",
        imagen: ""
      }
      // console.log(this.nuevojugador.nombre);
      // console.log(this.nuevojugador.id);
      // console.log(this.contador);
    }
  }

}
