import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	// BuildPageComponent,
	CaseStudiesPageComponent,
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
	{ path: 'case-studies', component:  CaseStudiesPageComponent },
	{ path: 'case-studies/:file', component: ResourcePageComponent },
	{ path: 'resources', component: ResourcesPageComponent },
    { path: 'resource/:intent/:level/:file', component: ResourcePageComponent },

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
