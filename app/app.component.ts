import { Component, OnInit } from '@angular/core';

import { Day }        from './day';
import { DayService } from './day.service';

@Component({
  moduleId:    module.id,
  selector:    'app',
  templateUrl: 'app.component.html',
  styleUrls:   ['app.component.css'],
  providers:   [DayService]
})
export class AppComponent implements OnInit {
	title = 'Cool Hands';
	days: Day[]; // switch to {} on launch

	constructor(private dayService: DayService) { }

	// getDays(): void {
	// 	this.dayService.getDays().then(days => this.days = days);
	// }
	
	ngOnInit(): void {
		// this.getDays();
  	}

}
