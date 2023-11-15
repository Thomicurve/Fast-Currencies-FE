import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [CommonModule]
})

export class NavbarComponent implements OnInit {
    showSide: boolean = false;
    userIsLogged: boolean = false;
    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.token$.subscribe((token) => {
            this.userIsLogged = token !== '';
        });
    }
}