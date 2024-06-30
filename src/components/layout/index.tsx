import React, { useState } from 'react';
import { ILayout } from '../../common/types/layout';
import TopBarComponent from '../top-bar';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import SideBarComponent from '../sidebar';
import { useStyles } from './styles';

const LayoutComponent = ({ children }: ILayout) => {
	const [isOpen, setIsOpen] = useState(true);
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:600px)');
	const classes = useStyles();

	return location.pathname === '/login' ||
		location.pathname === '/register' ? (
		<>{children}</>
	) : (
		<Box
			display={isNonMobile ? 'flex' : 'block'}
			width="100%"
			height="100%"
		>
			<SideBarComponent
				isNonMobile={isNonMobile}
				drawerWidth="250px"
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<Box className={classes.mainSection}>
				<TopBarComponent />
				{children}
			</Box>
		</Box>
	);
};

export default LayoutComponent;
