import {
	Component,
	ViewChild,
	Inject,
	Input,
	PLATFORM_ID,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';

@Component({
	selector: 'app-code-editor',
	standalone: true,
	imports: [MonacoEditorModule, FormsModule, PanelModule, DividerModule],
	templateUrl: './code-editor.component.html',
	styleUrl: './code-editor.component.scss',
})
export class CodeEditorComponent {
	@Input() height: number = 500;

	canLoad: boolean = false;
	@ViewChild('editor') editor: any;

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	code = '';
	editorOptions = {
		theme: 'vs-dark',
		language: 'html',
		automaticLayout: true,
		wordWrap: true,
	};
}
