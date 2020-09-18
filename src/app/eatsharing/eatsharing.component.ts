import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eatsharing',
  templateUrl: './eatsharing.component.html',
  styleUrls: ['./eatsharing.component.css']
})
export class EatsharingComponent implements OnInit {
  data: ItemData[] = [];
  isDetailsModalVisible = false;
  selectedItem;
  constructor() { 
    this.data = new Array(5).fill({}).map((_, index) => {
      var nn = Number((Math.random() * 1000).toFixed(0));
      var mm = Number((Math.random() * 5).toFixed(0));
      return {
        picSrc: `../../assets/eating_${mm}.png`,
        starNum: `${nn}`,
        href: 'http://localhost:4200',
        title: `We're together`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Do you want ot join us to go out, there is one restuartant very nice!',
        content:
          'We got one nice restuartant, do you want to joi us, it is very yummy, ' +
          'Welcome to join us.'
      };
    });
  }

  ngOnInit(): void {
  }
  openDetails(item) {
    this.selectedItem = item;
    this.isDetailsModalVisible = true;
  }
  handleDetailsCancel() {
    this.isDetailsModalVisible = false;
  }

}

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
  starNum: string;
  picSrc: string;
} 
