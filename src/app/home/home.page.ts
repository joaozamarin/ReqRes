import { User } from './../models/user.model';
import { Api } from './../models/api.model';
import { ReqresService } from '../services/reqres.service';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage implements OnInit{
  retornoApi: User[] = [];

  constructor(private reqres: ReqresService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.reqres.getAll().subscribe(dados => {
      this.retornoApi = dados.data;
    })
  }

  detalhes(id: number) {
    this.router.navigateByUrl(`/detalhes/${id}`);
  }
}
