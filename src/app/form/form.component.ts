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
  pontuacao: FormGroup;
  Info: any;

  constructor(private http: ConfigService) {
    this.pontuacao = new FormGroup({
      nome: new FormControl('', Validators.required),
      pontos: new FormControl('', Validators.required),
    })
  }

  async ngOnInit(): Promise<void> {
    this.Info = await this.http.get('Player');
  }

  async onSubmit() {
    this.Info !== null ? await this.http.set('Player', [...this.Info, { Players: this.pontuacao.value }]) : await this.http.set('Player', [{ Players: this.pontuacao.value }]);

    this.Info = await this.http.get('Player');
  }

}
