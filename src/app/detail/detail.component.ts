import { Component } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from '../services/player-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private route: ActivatedRoute, private servicio: PlayerServiceService) { }

  jugador : Player = {
    id: -1,
    nombre: "",
    apellido: "",
    posicion: "",
    imagen: ""
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jugador = this.servicio.obtenerJugadorPorId(id);
    console.log(id);
  };
}
