import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  handleClick()
  {
    document.getElementById("header")?.classList.toggle('mobile-nav-active');
     document.getElementById("icon")?.classList.toggle("fa-bars");
     document.getElementById("icon")?.classList.toggle("fa-times");
  
  }

  
}
