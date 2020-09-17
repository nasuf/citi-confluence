import { Component, OnInit } from '@angular/core';
import { techList } from '../constants';
import { NzModalRef } from 'ng-zorro-antd/modal/modal-ref';

@Component({
  selector: 'app-tech-qa',
  templateUrl: './tech-qa.component.html',
  styleUrls: ['./tech-qa.component.css']
})
export class TechQaComponent implements OnInit {

  techList = techList;
  item;
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
    console.log('点击了确定');
    this.isNewAnswerModalVisible = false;
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