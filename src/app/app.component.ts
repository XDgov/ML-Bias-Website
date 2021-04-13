import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd, NavigationStart  } from '@angular/router';
import { MainContentService } from './services/main-content.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
	private subscribers: any[] = [];
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		public main: MainContentService
	) {
		this.subscribers.push(this.router.events.subscribe(e => {
			if (e instanceof NavigationStart) {
				this.main.setDefaults();
			}
			if (e instanceof NavigationEnd) {
				this.main.siteContainerClasses.push(`page-${e.url}`);
			}
		}));
	}
	ngOnDestroy() {
		this.subscribers.forEach(subscriber => subscriber.unsubscribe());
	}
	ngAfterViewInit() {	}
  	title = 'bias-in-ai';
}
