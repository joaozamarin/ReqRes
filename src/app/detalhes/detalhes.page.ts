import { ReqresService } from './../services/reqres.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { User } from '../models/user.model';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class DetalhesPage implements OnInit {
  id!: number;

  user: User = {avatar: '', email: '', first_name: '', id: this.id, last_name: ''};

  constructor(
    private activatedRoute: ActivatedRoute,
    private reqResService: ReqresService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.reqResService.getOne(this.id).subscribe((dados) => {
      this.user = dados;
    })
  }

  editar(id: number) {
    this.router.navigateByUrl(`/update/${id}`);
  }

  excluir() {
    if(confirm('Deseja excluir este Usuário?')) {
      this.reqResService.delete(this.id).subscribe((dados) => {
        alert(`Usuário ${this.user.first_name} ${this.user.last_name} excluido com sucesso!!!`);
        console.log(dados)

        this.router.navigateByUrl('/home');
      })
    }
  }
}
