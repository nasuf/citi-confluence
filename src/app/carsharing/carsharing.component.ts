import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsharing',
  templateUrl: './carsharing.component.html',
  styleUrls: ['./carsharing.component.css']
})
export class CarsharingComponent implements OnInit {
  data: ItemData[] = [];
  constructor() {
    this.data = new Array(5).fill({}).map((_, index) => {
      var nn = Number((Math.random() * 1000).toFixed(0));
      var cc = Number((Math.random() * 5).toFixed(0));
      return {
        picSrc: `../../assets/car_${cc}.png`,
        starNum: `${nn}`,
        href: 'http://localhost:4200',
        title: `From Chen hui road to Century Avenue`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources ' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }

  ngOnInit(): void {
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
