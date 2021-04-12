import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
    selector:       'app-resource',
    templateUrl:    './resource.component.html',
    styleUrls:      ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
    @HostBinding('class.list') @Input() list: boolean = false;
    @HostBinding('class.d-none') hideCard: boolean = false;
    
    @Input() public title:string;
	@Input() public tags:string[];
    @Input() public resourceIdentifier:string;
	@Input() public resourceLink:string;

	@Input() public markdownFileUrl:string;
	@Input() public classes:string[] = [];
    @Input() public showActions:boolean = true;

    constructor(
        public github: GithubService
    ) {}

    ngOnInit() {
        if (this.markdownFileUrl) this.hideCard = true;
        if (this.resourceIdentifier) this.hideCard = true;
    }
    onReady = () => this.hideCard = false;
}
