import { Component } from '@angular/core';
import { Quiz } from "../../components/quiz/quiz";

@Component({
  selector: 'app-home',
  imports: [Quiz],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
