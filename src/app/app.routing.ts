import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
	{
		path: '',
		component: SearchComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);