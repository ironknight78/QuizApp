import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { CheckAnswersService } from '../../services/check-answers.service';
import { Router } from '@angular/router';
import { StoreScoreService } from '../../services/store-score.service';
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(data, checkAnswers, fb, router, storeScore) {
        this.data = data;
        this.checkAnswers = checkAnswers;
        this.fb = fb;
        this.router = router;
        this.storeScore = storeScore;
        this.numero = 0;
        this.score = 0;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        console.log("Current message: ");
        console.log(this.message);
        console.log("Posible answers: ");
        console.log(this.message[this.numero].posibleAnswer);
        this.posibleAnswers = this.message[this.numero].posibleAnswer;
        var formControls = this.posibleAnswers.map(function (control) { return new FormControl(false); });
        this.answers = this.fb.group({
            posibleAnswers: new FormArray(formControls)
        });
        this.total_questions = this.message.length;
        console.log(this.total_questions);
        this.storeScore.changeTotalQuestions(this.total_questions);
    };
    QuestionComponent.prototype.nextQuestion = function () {
        if (this.numero + 1 < this.total_questions) {
            document.getElementById('checkButton').disabled = false;
            document.getElementById('nextQuestionButton').disabled = true;
            this.numero += 1;
            console.log(this.numero);
            console.log(this.total_questions);
            this.posibleAnswers = this.message[this.numero].posibleAnswer;
            document.getElementById('feedback').style.opacity = '0.5';
        }
        else {
            this.storeScore.changeMessage(this.score);
            this.storeScore.currentMessage.subscribe(function (message) {
                console.log("Score stored: " + message);
            });
            this.goto('end');
        }
    };
    QuestionComponent.prototype.makeFeedBackReappear = function () {
        document.getElementById('feedback').style.opacity = '1';
    };
    QuestionComponent.prototype.submit = function () {
        var _this = this;
        this.makeFeedBackReappear();
        document.getElementById('checkButton').disabled = true;
        document.getElementById('nextQuestionButton').disabled = false;
        var selectedAnswers = this.answers.value.posibleAnswers
            .map(function (checked, index) { return checked ? _this.posibleAnswers[index] : null; })
            .filter(function (value) { return value !== null; });
        console.log("Given question:");
        this.question = this.message[this.numero].question;
        console.log(this.question);
        console.log("Selected Answers:");
        console.log(selectedAnswers);
        var payload = {
            question: this.question,
            answers: selectedAnswers
        };
        console.log("Payload");
        console.log(payload);
        new Promise(function (resolve, reject) {
            var res = _this.checkAnswers.check_anwers(JSON.stringify(payload))
                .then(function (res) {
                console.log("Graded answers response from lambda: ");
                console.log(res);
                console.log("Score: " + _this.score);
                if (res.isCorrect == true)
                    _this.score += 10;
                console.log("Score: " + _this.score);
                _this.graded_answers = JSON.stringify(res.gradedAnswers);
                _this.correct_answers = JSON.stringify(res.correctAnswers);
                console.log("Graded Answers:");
                console.log(_this.graded_answers);
                console.log(_this.correct_answers);
            }, function (msg) {
                reject(msg);
            });
        });
    };
    QuestionComponent.prototype.goto = function (pagename) {
        console.log('Moving to page: ' + pagename);
        this.router.navigate([pagename]);
    };
    QuestionComponent = tslib_1.__decorate([
        Component({
            selector: 'app-question',
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService,
            CheckAnswersService,
            FormBuilder,
            Router,
            StoreScoreService])
    ], QuestionComponent);
    return QuestionComponent;
}());
export { QuestionComponent };
//# sourceMappingURL=question.component.js.map