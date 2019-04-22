import { Component, OnInit } from '@angular/core';
import { GetQuestionsSerivceService } from '../../services/get-questions-serivce.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  constructor(private getQuestionsSerivceService:GetQuestionsSerivceService) { }

  ngOnInit() { }

  public getQuestions():void{
    this.getQuestionsSerivceService.get_questions();
  }

}
