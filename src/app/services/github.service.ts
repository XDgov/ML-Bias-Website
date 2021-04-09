import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class GithubService {
    public entryPoints: any = {
        default: 'https://github.com/XDgov/MLBias/tree/main/',
        raw: 'https://raw.githubusercontent.com/XDgov/MLBias/main/',
    }
	public resourceIdentifiers: any = {
		learn: new Array("Books", "Datasets", "ExternalTooling", "FrameworkOverview", "Papers"),
		build: new Array("BuildversusBuy", "Deployment_Retrain", "MachineLearningPipeline", "Model_Explainability", "Results_Interpretation"),
	};
    constructor() { }
}
