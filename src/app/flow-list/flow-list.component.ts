import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { flowList } from '../constants';

@Component({
  selector: 'app-flow-list',
  templateUrl: './flow-list.component.html',
  styleUrls: ['./flow-list.component.css']
})
export class FlowListComponent implements OnInit {
  flowList = flowList;

  constructor() { }

  ngOnInit() { }

}