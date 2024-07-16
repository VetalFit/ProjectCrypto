import { Stack, Autocomplete, TextField } from '@mui/material';
import { ISingleAsset } from '../../common/types/assets';
import { useAppSelector } from '../../utils/hook';
import { useNavigate } from 'react-router-dom';
import { FC, useState } from 'react';

const SearchBarComponent: FC = (): JSX.Element => {
	const [selectedItem, setSelectedItem] = useState<string | null>('');
	const navigate = useNavigate();
	const assetsArray: ISingleAsset[] = useAppSelector(
		(state) => state.assets.assets
	);

	return (
		<Stack spacing={2} sx={{ width: 300 }}>
			<Autocomplete
				value={selectedItem}
				onChange={(e: any, value: string | null) => {
					navigate(`single/${value}`);
					setSelectedItem(null);
				}}
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
	);
};

export default SearchBarComponent;
