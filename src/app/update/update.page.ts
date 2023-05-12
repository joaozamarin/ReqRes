import { UserUpdate } from './../models/userUpdate.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReqresService } from './../services/reqres.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UpdatePage implements OnInit {
  id: number | any;
  name: string = '';
  job: string = '';

  constructor(
    private reqResService: ReqresService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.reqResService.getOne(this.id).subscribe((dados) => {
      this.name = `${dados.first_name} ${dados.last_name}`;
    })
  }

  salvar() {
    if ((this.name, this.job) != '') {
      const user: UserUpdate = {
        job: this.job,
        name: this.name
      }

      this.reqResService.update(user, this.id).subscribe((dados) => {
        alert(`Usuário ${dados.name} atualizado!!!`);
        console.log(dados);

        this.router.navigateByUrl('/home');
      })
    } else {
      alert('Insira os dados corretamente!!!');
    }
  }

}
