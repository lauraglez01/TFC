import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'sections-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit{
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
    this.isAuthenticated = false;
  }
}
