import { Injectable } from '@angular/core';
import { Player } from '../player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor() { }


  private jugadores: Player[] = [];

  agregarJugador(player: Player) {
    this.jugadores.push(player);
  }

  obtenerJugadores() {
    return this.jugadores;
  }

  obtenerJugadorPorId(id: number):Player{
    return this.jugadores.filter(jugador => jugador.id === id)[0];
  }


}
