import { AfterViewInit, Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nome', 'Pontos', 'escola'];
  data: any[] = [];
  resultsLength: number = 0;

  constructor(private http: ConfigService) {
  }

  async ngAfterViewInit() {
    this.data = await this.http.get('Player');

    this.resultsLength = this.data.length;
  }
}
