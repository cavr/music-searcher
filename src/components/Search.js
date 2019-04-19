import React from 'react';
import _ from 'lodash';
import axios from 'axios';

import { Item, Input, Icon } from 'native-base';

export const Search = ({ onSearch }) => {
	const handleChange = async value => {
		const musicList = await axios.get(
			`https://itunes.apple.com/search?term=${value}&entity=musicTrack`
		);
		onSearch(musicList.data.results);
	};

	const debounceSearch = _.debounce(handleChange, 500);

	return (
		<Item>
			<Icon name="ios-search" />
			<Input onChangeText={debounceSearch} placeholder="Search" />
			<Icon name="ios-people" />
		</Item>
	);
};
