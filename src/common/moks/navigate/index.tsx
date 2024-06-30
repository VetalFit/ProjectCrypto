import {
	HomeOutlined,
	QueryStatsOutlined,
	MenuBookOutlined,
	SettingsOutlined,
} from '@mui/icons-material';

export const navMenu = [
	{
		name: 'Home',
		icon: <HomeOutlined />,
		path: '/',
		id: 1,
	},
	{
		name: 'Favorites',
		icon: <QueryStatsOutlined />,
		path: '/watchlist',
		id: 2,
	},
	{
		name: 'News',
		icon: <MenuBookOutlined />,
		path: '/news',
		id: 3,
	},
	{
		name: 'Settings',
		icon: <SettingsOutlined />,
		path: '/settings',
		id: 4,
	},
];
