import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PrimeNGConfig } from 'primeng/api';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { isPlatformBrowser } from '@angular/common';
import { CodeEditorComponent } from './shared/components/editor/code-editor.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		SidebarComponent,
		CodeEditorComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	canLoad: boolean = false;

	// Make sure Monaco library runs on the Client
	constructor(
		private primeNGConfig: PrimeNGConfig,
		@Inject(PLATFORM_ID) private platformId: Object
	) {
		if (isPlatformBrowser(this.platformId)) {
			this.canLoad = true;
			import('ngx-monaco-editor-v2').then((module) => {
				module.MonacoEditorModule.forRoot();
			});
		}
	}

	// Enable Ripple
	ngOnInit(): void {
		this.primeNGConfig.ripple = true;
	}
}
