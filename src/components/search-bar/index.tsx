import { Stack, Autocomplete, TextField } from '@mui/material';
import { ISingleAsset } from '../../common/types/assets';
import { useAppSelector } from '../../utils/hook';

const SearchBarComponent = () => {
	const assetsArray: ISingleAsset[] = useAppSelector(
		(state) => state.assets.assets
	);

	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				freeSolo
				renderInput={(el) => (
					<TextField
						{...el}
						label="Search"
						InputProps={{
							...el.InputProps,
							type: 'search',
						}}
					/>
				)}
				options={assetsArray.map((el: { name: string }) => el.name)}
			/>
		</Stack>

		// <Grid className={classes.searchBlock}>
		// 	<IconButton className={classes.searchIcon}>
		// 		<Search />
		// 	</IconButton>
		// 	<InputBase className={classes.searchInput} placeholder="Search" />
		// </Grid>
	);
};

export default SearchBarComponent;
