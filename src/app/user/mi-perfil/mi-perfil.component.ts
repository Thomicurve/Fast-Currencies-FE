import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'mi-perfil-page',
  templateUrl: 'mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})

export class MiPerfilComponent implements OnInit {
  userData = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMyProfile()
      .subscribe({
        next: (user) => {
          this.userData = user;
        }
      })
  }

}