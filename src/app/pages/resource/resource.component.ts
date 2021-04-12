import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
    selector: 'app-page-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})
export class ResourcePageComponent {
    private params:any = {
        intent: null,
        level: null,
        file: null
    };
    public resourceIdentifier:string;
    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
        Object.keys(this.params).forEach(name => {
            let value = this.activatedRoute.snapshot.paramMap.get(name);
            if (value) this.params[name] = value;
        });
        this.resourceIdentifier = Object.values(this.params).join('/');
    }
}