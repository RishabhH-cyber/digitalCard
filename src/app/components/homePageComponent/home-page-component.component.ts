import { Component, OnInit,HostListener  } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home-page-component',
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.scss']
})
export class HomePageComponentComponent implements OnInit {

  constructor(public utilsService:UtilsService) { }
  username: string='';
  newUsername: string = '';
   showTooltip = false;
  tooltipText = '';
  
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.showTooltip = true;
    this.tooltipText = 'Your tooltip content here';
    
    // Update tooltip position based on mouse coordinates
    const tooltip = document.querySelector('.tooltip') as HTMLElement;
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY - 20) + 'px';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.showTooltip = false;
  }

  ngOnInit(): void {
    this.utilsService.currentUsername.subscribe(username => {
      this.username = username;
    });
  }
  updateUsername() {
    this.utilsService.updateUsername(this.newUsername);
  }

}
