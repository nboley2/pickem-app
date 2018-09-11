import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

import { MatchupsService } from '../matchups.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  active;
  year;
  week;

  constructor(private matchupsService: MatchupsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.active = true;
    this.route.params.subscribe(params => {
      this.year = params['year'];
      this.week = params['week'];
      console.log(this.year);
      this.getMatchups();
    });
  }

  getMatchups() {
    this.matchupsService.getMatchups(this.year, this.week)
    .pipe(
      takeWhile(() => this.active)
    )
    .subscribe(result => {
      const MATCHUPDATA = result;
      console.log(MATCHUPDATA);
    });
  }

}
