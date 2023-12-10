import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})

export class NavbarComponent implements OnInit {
    showSide: boolean = false;
    userIsLogged: boolean = false;
    isAdmin: boolean = false;

    constructor(private authService: AuthService, private router: Router) { }

    async ngOnInit() {
        this.authService.token.subscribe((token) => {
            this.userIsLogged = token !== '';
        });

        this.authService.isUserAdmin.subscribe((isAdmin) => this.isAdmin = isAdmin);
    }

    moveTo(path: string) {
        this.router.navigate([path]);
        this.showSide = false;
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}