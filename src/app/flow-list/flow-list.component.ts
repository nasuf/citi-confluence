import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { flowList } from '../flow-list';

@Component({
  selector: 'app-flow-list',
  templateUrl: './flow-list.component.html',
  styleUrls: ['./flow-list.component.css']
})
export class FlowListComponent implements OnInit {
  flowList = flowList;
  isVisible = false;

  constructor() { }

  showFlowDetailModal() {
    this.isVisible = true;
    console.log('show madal function');
  }

  onHandleEvent() {
    this.isVisible = false;
  }

  ngOnInit() { }

}