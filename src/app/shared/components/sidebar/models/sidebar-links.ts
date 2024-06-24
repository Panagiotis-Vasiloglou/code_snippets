export const Links: MenuItem[] = [
	{
		label: 'Home',
		routerLink: ['/home'],
		iconDark: './assets/global/sidebar/dark/home.svg',
		iconWhite: './assets/global/sidebar/light/home.svg',
		separator: false,
		routerLinkActiveOptions: { exact: true },
	},
	{
		label: 'My Snippets',
		routerLink: ['/my-snippets'],
		iconDark: './assets/global/sidebar/dark/code.svg',
		iconWhite: './assets/global/sidebar/light/code.svg',
		separator: false,
		routerLinkActiveOptions: { exact: false },
	},
	{
		label: 'Trending',
		routerLink: ['/trending'],
		iconDark: './assets/global/sidebar/dark/fire.svg',
		iconWhite: './assets/global/sidebar/light/fire.svg',
		separator: false,
		routerLinkActiveOptions: { exact: false },
	},
	{
		label: 'Settings',
		routerLink: ['/settings'],
		iconDark: './assets/global/sidebar/dark/cog.svg',
		iconWhite: './assets/global/sidebar/light/cog.svg',
		separator: false,
		routerLinkActiveOptions: { exact: false },
	},
];

export interface MenuItem {
	label: string;
	routerLink: string[];
	iconDark: string;
	iconWhite: string;
	separator: boolean;
	routerLinkActiveOptions: any;
}
