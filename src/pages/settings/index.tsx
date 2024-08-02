import { Box, Grid, Tab, Tabs, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TabPanel from '../../components/tab-pannel';
import { tabProps } from '../../utils/helpers';
import { tokens } from '../../theme';
import { useStyles } from './styles';
import PersonalInfoComponent from '../../components/settings-personal-info';
import { useAppDispatch } from '../../utils/hook';
import { getPublicUser } from '../../store/thunks/auth';

const SettingsPage = () => {
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const classes = useStyles();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPublicUser());
	}, [dispatch])

	const handleChange = (e: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Grid className={classes.root}>
			<Box className={classes.tabsWrapper}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="Settings tabs"
					centered
					textColor="secondary"
					TabIndicatorProps={{
						style: {
							background: colors.blue,
						},
					}}
				>
					<Tab label="Personal information" {...tabProps(0)} />
					<Tab label="Change password" {...tabProps(1)} />
					<Tab label="Delete account" {...tabProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<PersonalInfoComponent />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Tabe Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Tabe Three
			</TabPanel>
		</Grid>
	);
};

export default SettingsPage;
