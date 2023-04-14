import { ReqresService } from './../services/reqres.service';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit{
  constructor(private service: ReqresService) {}

  ngOnInit(): void {
    this.service.getAll();
    console.log(this.service.getAll());
  }
}
