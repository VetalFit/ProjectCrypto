import React, { FC, useEffect, useState } from 'react';
import TopBarComponent from '../top-bar';
import { Outlet, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import SideBarComponent from '../sidebar';
import { useStyles } from './styles';
import { useAppDispatch } from '../../utils/hook';
import { getPublicUser } from '../../store/thunks/auth';

const LayoutComponent: FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(true);
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:767px)');
	const classes = useStyles();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPublicUser());
	}, [dispatch]);

	return location.pathname === '/login' ||
		location.pathname === '/register' ? (
		<>
			<Outlet />
		</>
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
				<TopBarComponent
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isNonMobile={isNonMobile}
				/>
				<Outlet />
			</Box>
		</Box>
	);
};

export default LayoutComponent;
