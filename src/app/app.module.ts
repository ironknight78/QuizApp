import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { InputformComponent } from './components/inputform/inputform.component';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GetQuestionsSerivceService } from './services/get-questions-serivce.service';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    QuestionsComponent
  ],
  imports: [
    MatSelectModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    GetQuestionsSerivceService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
