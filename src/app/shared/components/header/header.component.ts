import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchChangeEvent, InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { Theme, ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		ToolbarModule,
		ButtonModule,
		InputSwitchModule,
		FormsModule,
		InputTextModule,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
	isLightTheme: boolean = false;
	selectedTheme: Theme = 'dark';
	themeService: ThemeService = inject(ThemeService);

	ngOnInit(): void {
		this.themeService.setTheme(this.selectedTheme);
	}

	onThemeChange(e: InputSwitchChangeEvent) {
		this.selectedTheme = e.checked ? 'light' : 'dark';
		this.themeService.setTheme(this.selectedTheme);
	}
}
