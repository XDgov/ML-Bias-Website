import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from 'src/app/services/github.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
	selector: 'app-resources',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
	@Input() public surveyData: any;
	public objectKeys = Object.keys;
	public displayNames = this.survey.displayNames;
	public resourceIdentifiers:any = this.github.resourceIdentifiers;

    constructor(
		public survey: SurveyService,
		private github:GithubService
	) {	}
}
