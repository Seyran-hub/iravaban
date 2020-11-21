import { Component, EventEmitter, Output } from '@angular/core';
//declare var $: any;
import { 
  Router
 } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  @Output()
  toggleSidebar = new EventEmitter<void>();

  public showSearch = false;

  constructor(
    private router: Router,
  ) {}

  logout(){
    console.log('ssss')
    localStorage.removeItem('adminToken')
    this.router.navigate(['/login']);
  }
}
