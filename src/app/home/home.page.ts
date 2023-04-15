import { Api } from './../models/api.model';
import { ReqresService } from '../services/reqres.service';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  retornoApi: Api[] = [];

  constructor(private reqres: ReqresService) { }

  getAllUsers() {
    this.reqres.getAll().subscribe(dados => {
      this.retornoApi = dados;

      console.log(this.retornoApi);
    })
  }
}
