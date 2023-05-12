import { UserCreate } from './../models/userCreate.model';
import { ReqresService } from './../services/reqres.service';
import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CreatePage implements OnInit {
  name: string = '';
  job: string = '';

  constructor(
    private reqResService: ReqresService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvar() {
    if ((this.name, this.job) == '')
      return alert('Insira os dados necessários para cadastrar');

    const user: UserCreate = {
      job: this.job,
      name: this.name
    };

    this.reqResService.create(user).subscribe((dados) => {
      alert(`Usuário ${dados.name} cadastrado com sucesso!!!`);
      console.log(dados);

      this.router.navigateByUrl('/home');
    })
  }

}
