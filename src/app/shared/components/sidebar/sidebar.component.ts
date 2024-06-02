import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Links, MenuItem } from './models/sidebar-links';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { InputSwitchChangeEvent, InputSwitchModule } from 'primeng/inputswitch';
import { Theme, ThemeService } from '../../services/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule, TieredMenuModule, InputSwitchModule, FormsModule],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
	links: MenuItem[] = Links;
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
