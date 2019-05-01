import { RouterModule, Routes } from '@angular/router';

// Main applications:
import { InputformComponent } from './components/inputform/inputform.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './components/question/question.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';



const APP_ROUTES: Routes = [

  { path: 'principal', component: InputformComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'scoreboard', component: ScoreBoardComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);