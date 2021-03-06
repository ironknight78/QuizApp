import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GetScoreboardService } from '../../services/get-scoreboard.service';
import { Router } from '@angular/router';
var ScoreBoardComponent = /** @class */ (function () {
    function ScoreBoardComponent(getScoreboardService, router) {
        this.getScoreboardService = getScoreboardService;
        this.router = router;
    }
    ScoreBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        new Promise(function (resolve, reject) {
            var res = _this.getScoreboardService.get_scoreboard()
                .then(function (res) {
                console.log("Answer returned from service");
                console.log(JSON.stringify(res));
                for (var x in res) {
                    res[x].timestamp = res[x].timestamp.split(' +')[0];
                    console.log(res[x]);
                }
                _this.scoreboard = res;
            }, function (msg) {
                // Error happened
                console.log(msg);
            });
        });
    };
    ScoreBoardComponent.prototype.goto = function (pagename) {
        console.log('Moving to page: ' + pagename);
        this.router.navigate([pagename]);
    };
    ScoreBoardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-score-board',
            templateUrl: './score-board.component.html',
            styleUrls: ['./score-board.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GetScoreboardService,
            Router])
    ], ScoreBoardComponent);
    return ScoreBoardComponent;
}());
export { ScoreBoardComponent };
//# sourceMappingURL=score-board.component.js.map