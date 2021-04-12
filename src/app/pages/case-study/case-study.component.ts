import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyPageComponent implements OnInit {
    public resourceIdentifier:string;
    constructor(
        private activatedRoute: ActivatedRoute,
    ) { 
        this.activatedRoute.params.subscribe(params => {
            this.resourceIdentifier = Object.values(params).join('/');
        });
    }
    ngOnInit(): void {}
}
