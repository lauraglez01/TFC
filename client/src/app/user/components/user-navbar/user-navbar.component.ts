import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user-components-navbar',
  standalone: false,
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
  
  public title = 'Bookies';

  constructor(public authService:AuthService){}

  public logout(){
    this.authService.logout();
  }
}
