import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../config.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  idList: Food[] = [
    { value: 'A', viewValue: 'Player 1' },
    { value: 'B', viewValue: 'Player 2' },

  ];
  pontuacao: FormGroup;
  Info: any;
  constructor(private http: ConfigService) {
    this.pontuacao = new FormGroup({
      id: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      pontos: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.pontuacao.value);

    this.Info = this.pontuacao.value.id === 'A' ? await this.http.set('PlayerA', { Players: this.pontuacao.value })
      : await this.http.set('PlayerB', { Players: this.pontuacao.value });

  }

}
