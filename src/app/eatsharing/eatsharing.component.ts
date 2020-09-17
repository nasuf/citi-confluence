import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eatsharing',
  templateUrl: './eatsharing.component.html',
  styleUrls: ['./eatsharing.component.css']
})
export class EatsharingComponent implements OnInit {
  data: ItemData[] = [];
  constructor() { 
    this.data = new Array(5).fill({}).map((_, index) => {
      var nn = Number((Math.random() * 1000).toFixed(0));
      var mm = Number((Math.random() * 5).toFixed(0));
      return {
        picSrc: `../../assets/eating_${mm}.png`,
        starNum: `${nn}`,
        href: 'http://localhost:4200',
        title: `ant design part`,
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
