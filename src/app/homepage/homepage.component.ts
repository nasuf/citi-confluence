import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
        margin-bottom: 0;
      }
    `
  ]
})

export class HomepageComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  constructor() { }

  ngOnInit(): void {
    console.log("this is a test");
  }

}
