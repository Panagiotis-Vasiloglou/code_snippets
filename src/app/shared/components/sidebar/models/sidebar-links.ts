import { MenuItem } from 'primeng/api';

export const Links: MenuItem[] = [
	{
		label: 'Home',
		routerLink: ['/'],
		icon: 'assets/core/sidebar/home.svg',
		separator: false,
		routerLinkActiveOptions: { exact: true },
	},
	{
		label: 'My Snippets',
		routerLink: ['/my-snippets'],
		icon: 'assets/core/sidebar/code.svg',
		separator: false,
		routerLinkActiveOptions: { exact: false },
	},
	{
		label: 'Trending',
		routerLink: ['/trending'],
		icon: 'assets/core/sidebar/fire.svg',
		separator: false,
		routerLinkActiveOptions: { exact: false },
	},
	{
		label: 'About Us',
		routerLink: ['/about-us'],
		icon: 'assets/core/sidebar/about.svg',
		separator: false,
		routerLinkActiveOptions: { exact: false },
	},
	{
		label: 'Settings',
		routerLink: ['/settings'],
		icon: 'assets/core/sidebar/cog.svg',
		separator: false,
		routerLinkActiveOptions: { exact: false },
	},
];
