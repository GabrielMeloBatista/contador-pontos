import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, startWith, map, catchError, switchMap } from 'rxjs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nome', 'Pontos'];
  data: any[] = [];
  resultsLength: number = 0;

  constructor(private http: ConfigService) {
  }

  async ngAfterViewInit() {
    this.data = await this.http.get('Player');

    this.resultsLength = this.data.length;
  }
}
