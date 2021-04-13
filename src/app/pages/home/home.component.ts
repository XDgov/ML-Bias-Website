import { Component, OnInit } from '@angular/core';
import { MainContentService } from 'src/app/services/main-content.service';
@Component({
	selector: 'app-page-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],

})
export class HomePageComponent implements OnInit {
	constructor(
		private main: MainContentService
	) {
		let i = this.main.siteHeaderClasses.indexOf('theme-purple');
		if (i >= 0) {
			this.main.siteHeaderClasses.splice(i, 1);
		}
		this.main.siteMainClasses.push('neg-mt-75');
		this.main.siteMainClasses.push('position-relative');
		this.main.siteMainClasses.push('zIndex-1');
		this.main.siteHeaderClasses.push('position-relative');
		this.main.siteHeaderClasses.push('zIndex-20');
	}
	ngOnInit() {

	}
}
