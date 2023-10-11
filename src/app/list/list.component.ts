import { Component } from '@angular/core';
import { Player } from '../player';
import { PlayerServiceService } from '../services/player-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public jugadores: Player[] = [];

  constructor(private servicio : PlayerServiceService) {
    this.jugadores = this.servicio.obtenerJugadores();
  }

}
