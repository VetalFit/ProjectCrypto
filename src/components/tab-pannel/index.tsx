/* eslint-disable no-self-compare */
import { Box } from "@mui/material";
import { TabPanelProps } from "../../common/types/tabs";

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== value}
			id={`simple-tab-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

export default TabPanel