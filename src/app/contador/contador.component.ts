import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  InfoA!: any;
  InfoB!: any;
  playerA: string = '';
  pontosA: number = 0;
  playerB: string = '';
  pontosB: number = 0;
  vencedor: string = '';

  constructor(private http: ConfigService) {
  }

  async ngOnInit() {
    this.InfoA = await this.http.get('PlayerA');
    this.InfoB = await this.http.get('PlayerB');
    console.log(this.InfoA);
    console.log(this.InfoB);

    this.playerA = this.InfoA?.Players.nome;
    this.pontosA = this.InfoA?.Players.pontos;
    this.playerB = this.InfoB?.Players.nome;
    this.pontosB = this.InfoB?.Players.pontos;

    if (this.pontosA > this.pontosB) {
      this.vencedor = this.playerA;
    } else if (this.pontosA < this.pontosB) {
      this.vencedor = this.playerB;
    } else {
      this.vencedor = 'Deu empate';
    }
  }

  boolResposta(): boolean {
    return this.pontosA == 0 || this.pontosB == 0;
  }
}
