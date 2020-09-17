import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  displayCom = 'home';
  carSharingClick(e) {
    console.log("car sharing clicked");
    this.displayCom = 'carSharing';
  }
  technologyClick(e) {
    console.log("technology clicked");
    this.displayCom = 'technology';
  }
  flowClick(e) {
    console.log("Flow clicked");
    this.displayCom = 'flow';
  }
  eatingSharingClick(e) {
    console.log("eatingSharingClick clicked");
    this.displayCom = 'eatingSharing';
  }
  lupClick(e) {
    this.displayCom = 'lup';
  }
  fmClick(e) {
    console.log("Flea market clicked");
    this.displayCom = 'fm';
  }
  homeClick(e) {
    this.displayCom = 'home';
  }
}
