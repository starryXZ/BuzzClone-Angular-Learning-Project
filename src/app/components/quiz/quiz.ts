import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz_questions from './data/quizz_questions.json';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {

  title:string = "";
  questions:any
  questionSelected:any

  answers:string[] = [];
  answerSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title  = quizz_questions.title;

      this.questions = quizz_questions.questions; 
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex= 0;
      this.questionMaxIndex = this.questions.length ;

      console.log(this.questionIndex);
      console.log(this.questionMaxIndex);
    }
  }

  playerChoice(value:string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep(){
    this.questionIndex+=1

    if(this.questionMaxIndex > this.questionIndex){
        this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true;
    }
  }

}