import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { MenuOutlined } from '@mui/icons-material';
import { useStyles } from './styles';
import FlexBetween from '../flex-between';
import { ITipBarProps } from '../../common/types/top-bar';
import ThemeSwitcherComponent from '../theme-switcher';
import SearchBarComponent from '../search-bar';

const TopBarComponent: FC<ITipBarProps> = (
	props: ITipBarProps
): JSX.Element => {
	const { isOpen, setIsOpen, isNonMobile } = props;

	const classes = useStyles();
	const name = sessionStorage.getItem('name');

	return (
		<AppBar className={classes.root} position="static">
			<Toolbar className={classes.toolbar}>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
				>
					<Grid item sm={3} lg={3}>
						<FlexBetween>
							<MenuOutlined
								className={classes.menuIcon}
								onClick={() => setIsOpen(!isOpen)}
							/>
							<Typography variant="h3">Welcome {name}</Typography>
						</FlexBetween>
					</Grid>
					{isNonMobile && (
						<Grid
							item
							display="flex"
							justifyContent="flex-end"
							sm={9}
							lg={9}
						>
							<ThemeSwitcherComponent />
							<SearchBarComponent />
						</Grid>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default TopBarComponent;
