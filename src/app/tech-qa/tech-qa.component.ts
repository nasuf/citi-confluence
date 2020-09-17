import { Component, OnInit } from '@angular/core';
import { techList } from '../constants';
import { NzModalRef } from 'ng-zorro-antd/modal/modal-ref';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-tech-qa',
  templateUrl: './tech-qa.component.html',
  styleUrls: ['./tech-qa.component.css']
})
export class TechQaComponent implements OnInit {

  techList = techList;
  item;
  newAnswer = '';
  listArr = [];
  constructor() { }

  ngOnInit(): void {
  }

  isNewQuestionModalVisible = false;
  isNewAnswerModalVisible = false;

  showNewQuestionModal(item): void {
    this.isNewQuestionModalVisible = true;
    this.item = item;
  }

  showNewAnswerModal(item): void {
    this.isNewAnswerModalVisible = true;
    this.item = item;
  }

  handleNewQuestionOK(): void {
    console.log('点击了确定');
    this.isNewQuestionModalVisible = false;
  }

  handleNewAnswerOk(): void {
    console.log('点击了确定' + this.newAnswer);
    this.isNewAnswerModalVisible = false;
    if (isNullOrUndefined(this.newAnswer)) {
      this.listArr.push("Bob: " + this.newAnswer);
    }
    
    this.newAnswer = '';
  }

  handleNewQuestionCancel(): void {
    this.isNewQuestionModalVisible = false;
  }

  handleNewAnswerCancel(): void {
    this.isNewAnswerModalVisible = false;
  }

}

interface ItemData {
  title: string;
  avatar: string;
  description: string;
  content: string;
}