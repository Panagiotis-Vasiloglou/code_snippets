import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'my-snippets',
		loadChildren: () =>
			import('./features/my-snippets/my-snippets.routing').then(
				(m) => m.MY_SNIPPETS_ROUTES
			),
	},
	{
		path: 'trending',
		loadChildren: () =>
			import('./features/trending/trending.routing').then(
				(m) => m.TRENDING_ROUTES
			),
	},
	{
		path: 'settings',
		loadChildren: () =>
			import('./features/settings/settings.routing').then(
				(m) => m.SETTINGS_ROUTES
			),
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
];
