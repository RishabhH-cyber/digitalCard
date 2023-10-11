import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.utilsService.currentUsername.subscribe(username => {
      this.username = username;
    });
  }
  updateUsername() {
    this.utilsService.updateUsername(this.newUsername);
  }

}
