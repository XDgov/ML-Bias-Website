import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MainContentService {
	public siteContainerClasses: string[] = [];
	public siteHeaderClasses: string[] = [];
	public siteMainClasses:string[] = [];
	public siteFooterClasses:string[] = [];

	constructor() {
		this.setDefaults();
	}
	public setDefaults() {
		this.siteContainerClasses = [];
		this.siteHeaderClasses = ['theme-purple'];
		this.siteMainClasses = [];
		this.siteFooterClasses = [];
	}
}