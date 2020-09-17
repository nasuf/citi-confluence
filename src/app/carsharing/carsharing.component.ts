import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsharing',
  templateUrl: './carsharing.component.html',
  styleUrls: ['./carsharing.component.css']
})
export class CarsharingComponent implements OnInit {
  data: ItemData[] = [];
  isDetailsModalVisible = false;
  detailContent = '';
  selectedItem;
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
    var randomArr = [];
    var randomSrcs = [];
    for (var i=0; i < 5; i++) {
      var cc = Number((Math.random() * 5).toFixed(0));
      var nn = Number((Math.random() * 1000).toFixed(0));
      randomArr.push(nn);
      randomSrcs.push("../../assets/car_" + cc + ".png");
    }
    this.data = [{
        picSrc: `${randomSrcs.pop()}`,
        starNum: `${randomArr.pop()}`,
        href: 'http://localhost:4200',
        title: `From Chen hui road to Century Avenue`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'From Chen hui road to Century Avenue.',
        content:
          'I am from Unit I, I can drive you from Zhangjiang site to Century Avenue, ' +
          'Anyone need car pooling can reach me on 156XXXXXX90.'
    },
    {
      picSrc: `${randomSrcs.pop()}`,
      starNum: `${randomArr.pop()}`,
      href: 'http://localhost:4200',
      title: `From Chen hui road to ZhouPu`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'From Chen hui road to ZhouPu.',
      content:
        'I am from Unit III, I can drive you from Zhangjiang site to ZhouPu, ' +
        'Anyone need car pooling can reach me on 188XXXXXX21.'
  },
  {
    picSrc: `${randomSrcs.pop()}`,
    starNum: `${randomArr.pop()}`,
    href: 'http://localhost:4200',
    title: `From Jin Kang road to Bei Cai`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'From Jin Kang road to Bei Cai.',
    content:
      'I am from Unit V, I can drive you from Hua Mu site to Bei Cai, ' +
      'Anyone need car pooling can reach me on 158XXXXXX61.'
}
  ];
  }
  openDetails(item) {
    this.detailContent = item.content;
    this.isDetailsModalVisible = true;
    console.log("open details!");
    this.selectedItem = item;
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
