import {
	AppBar,
	Box,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
	useTheme,
} from '@mui/material';
import React, { FC, useContext } from 'react';
import {
	LightMode,
	DarkMode,
	Search,
	NotificationsNone,
	MenuOutlined,
} from '@mui/icons-material';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';
import FlexBetween from '../flex-between';
import { ITipBarProps } from '../../common/types/top-bar';

const TopBarComponent: FC<ITipBarProps> = (
	props: ITipBarProps
): JSX.Element => {
	const { isOpen, setIsOpen } = props;
	const theme = useTheme();
	const colorMode: any = useContext(ColorModeContext);
	const classes = useStyles();
	const name = sessionStorage.getItem('name');

	return (
		<AppBar className={classes.root} position="static">
			<Toolbar className={classes.toolbar}>
				<FlexBetween>
					<MenuOutlined
						className={classes.menuIcon}
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Typography variant="h3">Welcome {name}</Typography>
				</FlexBetween>
				<Box display="flex">
					<Grid
						onClick={colorMode.toggleColorMode}
						className={classes.iconBlock}
					>
						<IconButton className={classes.themeIcon}>
							{theme.palette.mode === 'dark' ? (
								<DarkMode />
							) : (
								<LightMode />
							)}
						</IconButton>
						<IconButton>
							<NotificationsNone />
						</IconButton>
					</Grid>
					<Grid className={classes.searchBlock}>
						<IconButton className={classes.searchIcon}>
							<Search />
						</IconButton>
						<InputBase
							className={classes.searchInput}
							placeholder="Search"
						/>
					</Grid>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default TopBarComponent;
