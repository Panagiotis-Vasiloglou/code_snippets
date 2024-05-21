import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    activeTheme:Theme = 'dark';

    constructor(@Inject(DOCUMENT) private document: Document){}

    setTheme(themePath:Theme){
        const themeElement = this.document.getElementById('app-theme') as HTMLLinkElement;

        if(themeElement){
            themeElement.href = `${themePath}.css`;
        }

        this.activeTheme = themePath;
    }
}

export type Theme = 'dark' | 'light';
