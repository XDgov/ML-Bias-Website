import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	// BuildPageComponent,
	CaseStudiesPageComponent,
    CaseStudyPageComponent,
	// ContributePageComponent,
	HomePageComponent,
	// LearnPageComponent,
	ResourcePageComponent,
	ResourcesPageComponent,
	SurveyPageComponent
} from './pages';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomePageComponent },
	
    { path: 'resources', component: ResourcesPageComponent },
    { path: 'resource/:intent/:level/:file', component: ResourcePageComponent },

    { path: 'case-studies', component:  CaseStudiesPageComponent },
	{ path: 'case-studies/:file', component: CaseStudyPageComponent },

	// { path: 'quiz', component: SurveyPageComponent },
	// { path: 'learn', component: LearnPageComponent },
	// { path: 'build', component: BuildPageComponent },
	// { path: 'contribute', component: ContributePageComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
